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
  if (config.nodeName === '#document') {
    for (const child of config.children) {
      updateElements(child)
    }
    return config
  }
  const domItem = updateElement(config)
  const newChildNodes = []
  const previousChildNodes = Array.from(domItem.element.childNodes)
  domItem.children.forEach((child, index) => {
    const existing = previousChildNodes.find(childNode => childNode === child.element)
    if (existing) {
      child.element = existing
    }
    updateElements(child)
    newChildNodes[index] = updateElements(child).element
  })
  newChildNodes.forEach((childNode, index) => {
    if (!previousChildNodes[index]) {
      return domItem.element.appendChild(childNode)
    }
    if (childNode !== previousChildNodes[index]) {
      return domItem.element.replaceChild(childNode, previousChildNodes[index])
    }
  })
  return domItem
}

export default updateElements
