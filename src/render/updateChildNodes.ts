/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import updateElement from './updateElement'
import type { DomElement, DomItem } from '../domItem/types'

/**
 * Update all the childNodes for this domItem element to mach domItem children.
 * @param domItem
 */
const updateChildNodes = (domItem: DomItem): DomItem => {
  if (!domItem.element) {
    domItem = updateElement(domItem)
  }
  if (!domItem.children || !domItem.children.length) {
    domItem.children = []
    return domItem
  }
  const element = domItem.element as Node
  domItem.children.forEach((child, index) => {
    const childNode = (child.element ?? updateElement(child).element) as Node
    // Put each child's node in its place, moving it if it is elsewhere. insertBefore (not replaceChild) so a node that
    // is in the way is pushed along rather than detached: when children swap places, both stay in the page.
    if (element.childNodes[index] !== childNode) {
      element.insertBefore(childNode, element.childNodes[index] ?? null)
    }
    child.element = childNode as DomElement
  })
  if (element.childNodes.length > domItem.children.length) {
    const maxLength = domItem.children.length
    let nodeToRemove = element.childNodes[maxLength]
    while (nodeToRemove) {
      element.removeChild(nodeToRemove)
      nodeToRemove = element.childNodes[maxLength]
    }
  }
  return domItem
}

export default updateChildNodes
