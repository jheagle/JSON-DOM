import 'core-js/stable'
import updateElement from './updateElement.js'

/**
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having child DomItems with config changes to be
 * applied
 * @returns {DomItem}
 */
const updateElements = config => {
  const domItem = updateElement(config)
  const newChildren = []
  const newChildNodes = []
  domItem.children.forEach((child, index) => {
    newChildren[index] = updateElements(child)
    newChildNodes[index] = newChildren[index].element
  })
  domItem.children = newChildren
  while (domItem.element.firstChild) {
    domItem.element.removeChild(domItem.element.firstChild)
  }
  domItem.element.append(...newChildNodes)
  return domItem
}

export default updateElements
