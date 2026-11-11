/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import siFunciona from 'si-funciona'
import { ScopedCollection } from 'collect-your-stuff'
import type { DomItem, DomItemRoot } from '../types'

/** One lookup index per json-dom process: every root's own ids live in their own scope, so two unrelated trees
 * (the server's real tree and a client's independently-built one) never collide even though both number their
 * items starting from the same small integers. */
const itemsById = new ScopedCollection<DomItemRoot, number, DomItem>()

/** The next id to assign - a plain, process-local monotonic counter (not a UUID: cheaper to generate/compare/
 * serialize, and uniqueness only ever needs to hold within one process, since nothing resolves an id against a
 * different root than the one it came from). Exported for createCoreItem's own first stamp and for this
 * module's own collision repair below - kept here, not there, since this module must never import back from
 * createCoreItem (which already imports this one, via removeChild - see unregisterItemIds's own caller). */
let nextItemId = 0
export const generateItemId = (): number => nextItemId++

/**
 * The real root above item, or null when item's own parentItem chain never reaches one. That covers two
 * different, both legitimate cases: an item rendered into some arbitrary, never-rooted container (see
 * renderHtml's own tests - not one forwarding could ever target, so it is not an error for it to have no
 * id-index entry), and an item that was never completed as a real DomItem at all - a raw plain config object
 * merged directly onto an already-rendered tree (si-funciona's mergeObjectsMutable, by reference, "as is",
 * when the two sides' shapes do not line up index-for-index - see updatePlayerStats.ts) carries no parentItem
 * property whatsoever, `undefined` rather than this codebase's own usual `null` for "detached". Unlike
 * getTopParentItem, this never throws: it is used purely to decide whether registration applies, not to
 * assert that a real root exists.
 * @param item
 */
const tryGetRoot = (item: DomItem): DomItemRoot | null => {
  let current: DomItem = item
  while (current.parentItem != null) {
    if (siFunciona.emptyObject(current.parentItem)) {
      return current as DomItemRoot
    }
    current = current.parentItem as DomItem
  }
  return null
}

/**
 * Register an item (and, recursively, its whole subtree) in its own root's id index, so getItemById can find
 * it. Call once a subtree's relationship to its parent is settled - see renderHtml, which is the one place
 * that happens for a freshly-attached subtree. Does nothing when item is not under a real root yet (or ever).
 *
 * Repairs two ways an item can reach this point without the id createCoreItem is supposed to have already
 * stamped on it, rather than requiring every consumer to avoid either:
 * - No id at all (`typeof item.id !== 'number'`): a raw plain config object merged directly onto an
 *   already-rendered tree (si-funciona's mergeObjectsMutable, by reference, "as is", when the two sides'
 *   shapes do not line up index-for-index - see updatePlayerStats.ts) never passed through createCoreItem at
 *   all, so it has no id (or parentItem, or has map) whatsoever.
 * - A collision (the id is already registered to a *different* item within this same root): a generic "build
 *   one item, then replicate it N times" helper (si-funciona's buildArray, cloning rather than constructing
 *   fresh - the shape matrix-dom's own buildMatrix uses for a grid's rows/columns/tiles) copies whatever id
 *   the one template already carries into every copy right along with everything else, with no way for
 *   json-dom to know that happened before registration.
 *
 * Catching both here, at the one real choke point every attached item passes through, protects against these
 * patterns (and any other generic cloning or raw merging this codebase does not yet know about) without
 * needing every consumer to avoid them. A real reuse of someone else's id (rather than two different items
 * both starting unassigned) is not realistically distinguishable from the collision case, so the same repair
 * applies regardless of cause - the alternative (leaving it in place) silently breaks resolution for one of
 * the two items, which is worse than quietly handing the second one a fresh id.
 * @param item - The subtree to register, root item included.
 */
export const registerItemIds = (item: DomItem): void => {
  const root = tryGetRoot(item)
  if (!root) {
    return
  }
  const alreadyThere = typeof item.id === 'number' ? itemsById.get(root, item.id) : undefined
  if (typeof item.id !== 'number' || (alreadyThere && alreadyThere !== item)) {
    item.id = generateItemId()
  }
  itemsById.set(root, item.id, item)
  ;(item.children || []).forEach(registerItemIds)
}

/**
 * Remove an item (and, recursively, its whole subtree) from its own root's id index - the reverse of
 * registerItemIds. Call before the item is actually detached, while its parentItem chain still resolves and
 * its own subtree is still intact to walk.
 * @param item - The subtree to unregister, root item included.
 */
export const unregisterItemIds = (item: DomItem): void => {
  const root = tryGetRoot(item)
  if (!root) {
    return
  }
  itemsById.delete(root, item.id)
  ;(item.children || []).forEach(unregisterItemIds)
}

/**
 * Resolve an id (as captured off a DomItem's own id) back to the item it refers to, within root's own tree.
 * Throws when the id isn't registered against this root - the same "stale reference" contract getItemByPath
 * already has: a silent wrong-answer resolution is worse than a loud failure.
 * @param root - The tree to resolve the id against.
 * @param id - The id to resolve, as read directly off a DomItem's own id property.
 */
export const getItemById = (root: DomItemRoot, id: number): DomItem => {
  const item = itemsById.get(root, id)
  if (!item) {
    throw new Error(`No item with id ${id} in this tree - it may have been removed, or never belonged to it.`)
  }
  return item
}
