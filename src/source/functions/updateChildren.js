import 'core-js/stable'
import createDomItem from '../objects/createDomItem'

/**
 * Update all the children for this domItem to match the domItem element childNodes.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem
 * @returns {DomItem}
 */
const updateChildren = domItem => {
  if (!domItem.element) {
    domItem.children = []
    return domItem
  }
  const previousChildren = domItem.children
  domItem.children = []
  domItem.element.childNodes
    .forEach((childNode, index) => {
      const existing = previousChildren.find(child => child.element === childNode)
      const child = existing ?? createDomItem({
        nodeName: childNode.nodeName.toLowerCase(),
        nodeValue: childNode.nodeValue,
        element: childNode
      })
      domItem.children[index] = child
    })
  return domItem
}

export default updateChildren
