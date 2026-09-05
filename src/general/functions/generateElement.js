import 'core-js/stable'
import updateElement from './updateElement.js'

/**
 * Create a new DOM Node based on name and data.
 * @function
 * @memberOf module:domGeneral
 * @param {string} nodeName
 * @param {string|null} data
 * @returns {Text|Comment|HTMLElement}
 */
const makeElementType = (nodeName, data = null) => {
  switch(nodeName) {
    case '#text':
      return document.createTextNode(data)
    case '#comment':
      return document.createComment(data)
    default:
      return document.createElement(nodeName)
  }
}

/**
 * Create an HTML element based on the provided attributes and return the element as an Object.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} domItem - The DomItem requiring matching HTML element property
 * @return {DomItem}
 */
const generateElement = domItem => {
  domItem.element = makeElementType(domItem.nodeName, domItem.nodeValue)
  return updateElement(domItem)
}

export default generateElement