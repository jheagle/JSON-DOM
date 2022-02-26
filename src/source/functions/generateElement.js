import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import updateElement from './updateElement.js'

/**
 * Create an HTML element based on the provided attributes and return the element as an Object.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem - The DomItem requiring matching HTML element property
 * @return {DomItem}
 */
const generateElement = domItem => updateElement(
  functionalHelpers.setValue('element', document.createElement(domItem.tagName), domItem)
)

export default generateElement