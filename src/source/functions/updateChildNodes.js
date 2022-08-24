import 'core-js/stable'
import updateElement from './updateElement.js'

/**
 * Update all the childNodes for this domItem element to mach domItem children.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem
 * @returns {DomItem}
 */
const updateChildNodes = domItem => {
  if (!domItem.element) {
    domItem = updateElement(domItem)
  }
  const previousChildNodes = Array.from(domItem.element.childNodes)
  domItem.children
    .map((child, index) => {
      const existing = previousChildNodes.find(childNode => childNode === child.element)
      let childNode = existing ?? child.element
      if (!childNode) {
        childNode = updateElement(child).element
      }
      if (!previousChildNodes[index]) {
        domItem.element.appendChild(childNode)
        return childNode
      }
      if (childNode !== previousChildNodes[index]) {
        domItem.element.replaceChild(childNode, previousChildNodes[index])
      }
      return childNode
    })
    .forEach((childNode, index) => {
      domItem.children[index].element = childNode
    })
  return domItem
}

export default updateChildNodes
