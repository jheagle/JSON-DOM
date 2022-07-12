import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import updateElement from './updateElement.js'

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
 * @memberOf module:domFunctions
 * @param {DomItem} domItem - The DomItem requiring matching HTML element property
 * @return {DomItem}
 */
const generateElement = domItem => updateElement(
  functionalHelpers.setValue('element', makeElementType(domItem.nodeName, domItem.nodeValue), domItem)
)

export default generateElement