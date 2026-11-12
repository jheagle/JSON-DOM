/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
import removeEventListener from '../events/functions/removeEventListener'
import { registerItemIds, unregisterItemIds } from '../domItem/tree/itemIdIndex'
import updateElements from './updateElements'
import type { DomItem } from '../domItem/types'
import type { EventName, ListenerDescriptor } from '../events/types'

/** What makes an item part of the tree rather than its data: kept on the existing item, never taken from the next.
 * The id is taken from the next item, so ids stay the ones the next tree (a server's, say) gives its items. */
const STRUCTURE = new Set(['element', 'parentItem', 'children', 'eventListeners', 'activeListeners'])

/**
 * A named listener as plain data, to tell whether two items have the same one. Only named listeners are compared: they
 * are the ones a tree carries as JSON. A listener given as a function was added locally (keyboard navigation, say)
 * and is never in the next tree, so it is left alone.
 * @param listener
 */
const listenerKey = (listener: ListenerDescriptor): string | null => typeof listener.listenerFunc === 'string'
  ? JSON.stringify([listener.listenerFunc, listener.listenerArgs ?? null, listener.listenerOptions ?? null])
  : null

/**
 * Make existing's named listeners the next item's: remove the ones the next item doesn't have (detached from the
 * element), and add the ones it gains (bound when the element is updated). Unchanged ones stay bound as they are.
 * @param existing
 * @param next
 */
const reconcileListeners = (existing: DomItem, next: DomItem): void => {
  const nextListeners = next.eventListeners ?? {}
  existing.eventListeners = existing.eventListeners ?? {}
  for (const eventName of Object.keys(existing.eventListeners) as EventName[]) {
    const wanted = (nextListeners[eventName] ?? []).map(listenerKey)
    for (const listener of [...existing.eventListeners[eventName]]) {
      const key = listenerKey(listener)
      if (key !== null && !wanted.includes(key)) {
        removeEventListener(eventName, listener.listenerFunc, listener.listenerArgs, listener.listenerOptions, existing)
      }
    }
  }
  for (const eventName of Object.keys(nextListeners) as EventName[]) {
    const have = (existing.eventListeners[eventName] ?? []).map(listenerKey)
    for (const listener of nextListeners[eventName]) {
      const key = listenerKey(listener)
      if (key !== null && !have.includes(key)) {
        existing.eventListeners[eventName] = existing.eventListeners[eventName] ?? []
        existing.eventListeners[eventName].push({ ...listener, listenerActive: false, activeResponder: null })
      }
    }
  }
}

/**
 * Make existing's own data the next item's (its id included): every property but the structure (element, parent,
 * children, listeners). A property the next item doesn't have is removed, unless it is a function (something added locally).
 * @param existing
 * @param next
 */
const reconcileData = (existing: DomItem, next: DomItem): void => {
  const target = existing as unknown as Record<string, unknown>
  const source = next as unknown as Record<string, unknown>
  for (const key of Object.keys(target)) {
    if (!STRUCTURE.has(key) && !(key in source) && typeof target[key] !== 'function') {
      delete target[key]
    }
  }
  for (const key of Object.keys(source)) {
    if (!STRUCTURE.has(key)) {
      target[key] = source[key]
    }
  }
}

/**
 * Pair each next child with the existing child it updates: the one with the same id, otherwise the one at the same
 * position when it is the same kind of node and no next child has it by id (an item without an id in the JSON, a
 * text node say, gets a fresh one when inflated, so its id says nothing about which item it was). Unpaired next
 * children are new.
 * @param existing
 * @param next
 */
const pairChildren = (existing: DomItem[], next: DomItem[]): Array<DomItem | undefined> => {
  const byId = new Map<number, DomItem>()
  existing.forEach(child => {
    if (typeof child.id === 'number') {
      byId.set(child.id, child)
    }
  })
  // An existing child some next child has by id is that one's, never another's by position
  const claimed = new Set(next.map(child => typeof child.id === 'number' ? byId.get(child.id) : undefined).filter(Boolean))
  const taken = new Set<DomItem>()
  return next.map((nextChild, index) => {
    const sameId = typeof nextChild.id === 'number' ? byId.get(nextChild.id) : undefined
    const atPosition = existing[index] && !claimed.has(existing[index]) ? existing[index] : undefined
    const candidate = sameId ?? atPosition
    if (candidate && !taken.has(candidate) && candidate.nodeName === nextChild.nodeName) {
      taken.add(candidate)
      return candidate
    }
    return undefined
  })
}

/**
 * Update existing's subtree to match next's, reusing every item (and its element and listeners) that next still has.
 * Items next no longer has are removed; new ones are added. Elements are not touched here; see reconcile.
 * @param existing
 * @param next
 */
const reconcileItem = (existing: DomItem, next: DomItem): void => {
  reconcileData(existing, next)
  reconcileListeners(existing, next)
  const previous = existing.children ?? []
  const nextChildren = next.children ?? []
  const pairs = pairChildren(previous, nextChildren)
  const kept = new Set(pairs.filter(Boolean))
  previous.filter(child => !kept.has(child)).forEach(child => {
    // Removed (already out of the id index, see reconcile): its element out of the page
    ;(child.element as ChildNode | undefined)?.remove?.()
  })
  existing.children = nextChildren.map((nextChild, index) => {
    const child = pairs[index]
    if (child) {
      reconcileItem(child, nextChild)
      return child
    }
    // New: taken as it is; its element is generated when the subtree is updated below
    nextChild.parentItem = existing
    return nextChild
  })
  existing.children.forEach(child => {
    child.parentItem = existing
  })
}

/**
 * Update a rendered tree to match a new version of it (the next tree, such as one inflated from a server's JSON), by
 * changing only what differs instead of rendering everything again. Children are matched by id, otherwise by
 * position and node name. A matched item keeps its element, its id and its listeners; it takes the next item's
 * attributes and data, and its named listeners are made the next item's. Items the next tree doesn't have are removed,
 * new ones are added, and then only the changed attributes and nodes are written to the page (see updateElement).
 *
 * Listeners added as functions (locally, not carried by the next tree) and focus stay where they are, since the
 * elements do.
 * @param existing - An item already rendered (it has an element). It stays the same kind of node: next must be one too.
 * @param next - The tree it should now match. Its items are taken over: don't render it separately.
 * @returns existing, updated.
 */
const reconcile = (existing: DomItem, next: DomItem): DomItem => {
  // The item updated in place is where the page's content lives (a <main>, a <body>): changing its kind of node would
  // replace that element with a new one outside the page. Children of another kind are replaced; this one never is.
  if (existing.nodeName.toLowerCase() !== next.nodeName.toLowerCase()) {
    throw new Error(`reconcile can't turn a ${existing.nodeName} into a ${next.nodeName}: give it a tree of the same node, or reconcile its parent.`)
  }
  // Ids can change (they follow the next tree), so the subtree leaves the id index first and is indexed again after
  unregisterItemIds(existing)
  reconcileItem(existing, next)
  registerItemIds(existing)
  // updateElements patches each item's element (only what changed) and puts its children's elements in order
  return updateElements(existing)
}

export default reconcile
