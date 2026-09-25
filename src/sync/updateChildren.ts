import 'core-js/stable'
import createDomItem from '../domItem/objects/createDomItem'
import type { DomElement, DomItem } from '../domItem/types'

/**
 * Update all the children for this domItem to match the domItem element childNodes.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} domItem
 * @returns {DomItem}
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
