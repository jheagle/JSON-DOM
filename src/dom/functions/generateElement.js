import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import updateElement from './updateElement'

/**
 * Create an HTML element based on the provided attributes and return the element as an Object.
 * @function
 * @memberOf module:domFunctions
 * @param {module:domObjects~DomItem} config - The DomItem requiring matching HTML element property
 * @return {module:domObjects~DomItem}
 */
const generateElement = config => updateElement(
  functionalHelpers.setValue('element', document.createElement(config.tagName), config)
)

export default generateElement