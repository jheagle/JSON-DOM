/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createDomItem from '../domItem/objects/createDomItem'
import type { DomElement, DomItem } from '../domItem/types'

/**
 * Update all the children for this domItem to match the domItem element childNodes.
 * @param domItem
 */
const updateChildren = (domItem: DomItem): DomItem => {
  if (!domItem.element) {
    domItem.children = []
    return domItem
  }
  const previousChildren = domItem.children
  domItem.children = []
  ;(domItem.element as Node).childNodes
    .forEach((childNode, index) => {
      const existing = previousChildren.find(child => child.element === childNode)
      const child = existing ?? createDomItem({
        nodeName: childNode.nodeName.toLowerCase(),
        nodeValue: childNode.nodeValue,
        element: childNode as DomElement
      })
      domItem.children[index] = child
      child.parentItem = domItem
    })
  return domItem
}

export default updateChildren
