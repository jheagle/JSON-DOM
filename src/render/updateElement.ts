/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import bindListeners from '../events/functions/bindListeners'
import deactivateListeners from '../events/functions/deactivateListeners'
import domItemChanges from '../diff/domItemChanges'
import { recordApplied } from '../diff/appliedSnapshot'
import siFunciona from 'si-funciona'
import generateElement from './generateElement'
import updateChildNodes from './updateChildNodes'
import type { DomItem } from '../domItem/types'

/**
 * Update a single objects.DomItem element with the provided attributes / style / elementProperties.
 *
 * Safe to call standalone (not just through {@link updateElements}/{@link renderHtml}): whenever this ends up
 * (re)generating domItem.element - because it had none yet, or because nodeName changed - it also re-attaches
 * domItem's direct children onto that element via {@link updateChildNodes}, so a bare call never orphans an
 * existing child subtree. The plain attribute/style patch path below doesn't touch domItem.element itself, so it
 * doesn't need to.
 * @param domItem - The DomItem having domItem changes to be applied to its
 * element
 */
const updateElement = (domItem: DomItem): DomItem => {
  if (!domItem.element) {
    return updateChildNodes(generateElement(deactivateListeners(domItem)))
  }
  const changes = domItemChanges(domItem)
  // From here on the item has an element (an element which is missing was generated above)
  const element = domItem.element as HTMLElement
  const properties = element as unknown as Record<string, unknown>
  if (changes.removed.nodeName || changes.added.nodeName) {
    // if the nodeName has changed then remove the element and create a new one
    element.remove()
    return updateChildNodes(generateElement(deactivateListeners(domItem)))
  }
  for (const dotKey in changes.removed) {
    const value = changes.removed[dotKey]
    if (!dotKey.includes('.')) {
      if (dotKey in element) {
        delete properties[dotKey]
        continue
      }
      element.removeAttribute(dotKey)
      continue
    }
    const baseKey = siFunciona.strBefore(dotKey, '.')
    if (baseKey !== 'class' && baseKey !== 'style') {
      throw new Error('Unhandled dotKey: ' + dotKey)
    }
    if (baseKey === 'class') {
      element.classList.remove(value)
      continue
    }
    // The key is usually already kebab-case here (domItemChanges normalizes it), but not always - see the fix
    // notes on the matching line below. kabobCase on an already-kebab string is a harmless no-op.
    element.style.removeProperty(siFunciona.kabobCase(siFunciona.strAfter(dotKey, '.')))
  }
  for (const dotKey in changes.added) {
    const value = changes.added[dotKey]
    if (dotKey === 'className') {
      element.className = value
      continue
    }
    if (dotKey === 'style') {
      // Update all styles based on incoming style object
      // setProperty wants CSS names (background-color), but the style object is written in camelCase (backgroundColor)
      for (const style in value) {
        element.style.setProperty(siFunciona.kabobCase(style), value[style])
      }
      continue
    }
    if (!dotKey.includes('.')) {
      if (dotKey in element && dotKey !== 'form') {
        // Some things can be assigned directly, but 'form' attribute cannot
        properties[dotKey] = value
        continue
      }
      element.setAttribute(dotKey, value)
      continue
    }
    const baseKey = siFunciona.strBefore(dotKey, '.')
    if (baseKey !== 'class' && baseKey !== 'style') {
      throw new Error('Unhandled dotKey: ' + dotKey)
    }
    if (baseKey === 'class' && (/\s/.test(value) || !value)) {
      // Skip this empty class name
      continue
    }
    if (baseKey === 'class') {
      element.classList.add(value)
      continue
    }
    // domItemChanges is expected to hand this key through already kebab-cased, but a style property which was
    // already assigned on the element (changed, not newly added) can come back through as its original camelCase
    // form; CSSOM silently ignores setProperty with an invalid (camelCase) name, so the style is dropped with no
    // error. kabobCase here is a harmless no-op when the key is already kebab, and a real fix when it is not.
    element.style.setProperty(siFunciona.kabobCase(siFunciona.strAfter(dotKey, '.')), value)
  }
  // The element now matches the item: the next update compares against this rather than reading the element back
  recordApplied(domItem)
  return bindListeners(domItem)
}

export default updateElement
