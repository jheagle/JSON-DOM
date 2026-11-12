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
  const childNodes = domItem.children.map(child => {
    const childNode = (child.element ?? updateElement(child).element) as Node
    child.element = childNode as DomElement
    return childNode
  })
  // Anything in the element that isn't one of the children's nodes goes (as before, when it ended up past the last child)
  const wanted = new Set(childNodes)
  Array.from(element.childNodes).forEach(node => {
    if (!wanted.has(node)) {
      element.removeChild(node)
    }
  })
  // Put the nodes in order from the last one back: a node is moved only when it isn't already right before the one that
  // follows it. So [1, 2, 3, 4] -> [2, 3, 4, 1] moves only 1, not 2, 3 and 4: a node that moves loses focus (and restarts
  // transitions), so as few as possible move. insertBefore, not replaceChild, so nothing in the way is detached.
  let following: Node | null = null
  for (let index = childNodes.length - 1; index >= 0; index--) {
    const childNode = childNodes[index]
    if (childNode.parentNode !== element || childNode.nextSibling !== following) {
      element.insertBefore(childNode, following)
    }
    following = childNode
  }
  return domItem
}

export default updateChildNodes
