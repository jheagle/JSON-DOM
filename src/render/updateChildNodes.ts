import 'core-js/stable'
import updateElement from './updateElement'

/**
 * Update all the childNodes for this domItem element to mach domItem children.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} domItem
 * @returns {DomItem}
 */
const updateChildNodes = domItem => {
  if (!domItem.element) {
    domItem = updateElement(domItem)
  }
  if (!domItem.children || !domItem.children.length) {
    domItem.children = []
    return domItem
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
  if (domItem.element.childNodes.length > domItem.children.length) {
    const maxLength = domItem.children.length
    let nodeToRemove = domItem.element.childNodes[maxLength]
    while (nodeToRemove) {
      domItem.element.removeChild(nodeToRemove)
      nodeToRemove = domItem.element.childNodes[maxLength]
    }
  }
  return domItem
}

export default updateChildNodes
