import 'core-js/stable'
import updateDomItem from './updateDomItem.js'
import createDomItem from '../objects/createDomItem'

/**
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having child DomItems with config changes to be
 * applied
 * @returns {DomItem}
 */
const updateDomItems = config => {
  const domItem = updateDomItem(config)
  const newChildren = []
  domItem.element.childNodes.forEach((childNode, index) => {
    const existing = domItem.children.find(child => child.element === childNode)
    newChildren[index] = updateDomItems(existing ?? createDomItem({
      nodeName: childNode.nodeName.toLowerCase(),
      nodeValue: childNode.nodeValue,
      element: childNode
    }))
  })
  domItem.children = newChildren
  return domItem
}

export default updateDomItems
