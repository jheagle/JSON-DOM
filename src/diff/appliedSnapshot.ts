/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import siFunciona from 'si-funciona'
import createChangeList from './createChangeList'
import type { DomItem } from '../domItem/types'
import type { ChangeList } from './types'

/**
 * What treeloom last wrote to an element, as the item described it: attribute values by their kabob-case names, the
 * class names, and the styles by their CSS (kabob-case) names. Values are kept exactly as the item had them, not as the
 * browser reports them back ('#333', not 'rgb(51, 51, 51)'; `border`, not its longhands).
 */
export type AppliedSnapshot = {
  attributes: Record<string, unknown>
  classes: string[]
  style: Record<string, unknown>
}

/**
 * Properties the person using the page changes directly (typing, ticking, choosing), so the element is their real current
 * state, not what was last written. These are compared with the element itself, as before, so an item still puts them
 * back (a controlled input: the item says '' and what was typed is cleared on the next update).
 */
const LIVE_PROPERTIES = ['value', 'checked', 'selected', 'indeterminate']

// Kept beside the item, not on it, so it never travels with the item (deflate, JSON) and goes away with the element
const snapshots = new WeakMap<object, AppliedSnapshot>()

/**
 * Whether an item's attributes can be compared through a snapshot: its style, when it has one, is an object of
 * properties. Anything else (a style written as one string) is compared against the element, as before.
 * @param domItem
 */
const canSnapshot = (domItem: DomItem): boolean => typeof domItem.attributes.style === 'undefined' ||
  siFunciona.isObject(domItem.attributes.style)

/**
 * The class names in a className string.
 * @param className
 */
const classNames = (className: unknown): string[] => typeof className === 'string'
  ? className.split(/\s+/).filter(Boolean)
  : []

/**
 * An item's attributes in the snapshot's form.
 * @param domItem
 */
const describe = (domItem: DomItem): AppliedSnapshot => {
  const snapshot: AppliedSnapshot = { attributes: {}, classes: [], style: {} }
  for (const name in domItem.attributes) {
    const value = domItem.attributes[name]
    if (name === 'className') {
      snapshot.classes = classNames(value)
      continue
    }
    if (name === 'style') {
      for (const property in value as Record<string, unknown>) {
        snapshot.style[siFunciona.kabobCase(property)] = (value as Record<string, unknown>)[property]
      }
      continue
    }
    snapshot.attributes[siFunciona.kabobCase(name)] = value
  }
  return snapshot
}

/**
 * Remember what was just written to the item's element (call it after the element has been updated to match the item).
 * Does nothing for an item without an element, a text or comment node, or a style that is not an object.
 * @param domItem
 */
export const recordApplied = (domItem: DomItem): void => {
  if (!domItem.element || domItem.nodeValue !== null || !canSnapshot(domItem)) {
    return
  }
  snapshots.set(domItem.element, describe(domItem))
}

/**
 * Forget what was written to an element, so its next update compares against the element itself again.
 * @param element
 */
export const forgetApplied = (element: object | null | undefined): void => {
  if (element) {
    snapshots.delete(element)
  }
}

/**
 * The changes that make the item's element match the item, worked out from what was last written to the element rather
 * than from the element itself: no style or attribute is read back from the DOM, and a value the browser stores in
 * another form ('#333' as 'rgb(51, 51, 51)', `border` as longhands) is not mistaken for a change. Undefined when there is
 * no snapshot to compare with (the element was never written by treeloom, or was captured from existing HTML), so the
 * caller compares against the element instead.
 * @param domItem
 * @param propertyName - The name to set a plain attribute by: the element's own property name when it has one
 * (innerHTML), otherwise the attribute's name (aria-label). Same rule as the element comparison.
 */
export const changesFromApplied = (
  domItem: DomItem,
  propertyName: (kabobKey: string) => string
): ChangeList | undefined => {
  const previous = domItem.element ? snapshots.get(domItem.element) : undefined
  if (!previous || domItem.nodeValue !== null || !canSnapshot(domItem)) {
    return undefined
  }
  const next = describe(domItem)
  const changes = createChangeList()
  const element = domItem.element as unknown as Record<string, unknown>
  for (const key in next.attributes) {
    const live = LIVE_PROPERTIES.includes(key) && key in element
    const current = live ? element[key] : previous.attributes[key]
    const differs = live && typeof current === 'string'
      ? String(next.attributes[key] ?? '') !== current
      : next.attributes[key] !== current
    if (differs) {
      changes.added[propertyName(key)] = next.attributes[key]
    }
  }
  previous.classes.forEach((name, index) => {
    if (!next.classes.includes(name)) {
      changes.removed[`class.${index}`] = name
    }
  })
  next.classes.forEach((name, index) => {
    if (!previous.classes.includes(name)) {
      changes.added[`class.${index}`] = name
    }
  })
  for (const property in previous.style) {
    if (!(property in next.style)) {
      changes.removed[`style.${property}`] = previous.style[property]
    }
  }
  for (const property in next.style) {
    // A changed value is simply set again (setProperty replaces it): no remove first, so one write, not two
    if (next.style[property] !== previous.style[property]) {
      changes.added[`style.${property}`] = next.style[property]
    }
  }
  return changes
}
