import 'core-js/stable'
import getAssignedStyles from './getAssignedStyles.js'
import functionalHelpers from 'functional-helpers'

/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param {HTMLElement} element
 * @param {Object<string, string>} attr
 * @returns {Object.<string, number>}
 */
const checkStyles = (element, attr = {}) => functionalHelpers.compareArrays(
  Object.keys(attr),
  Object.keys(getAssignedStyles(element.style)).map(functionalHelpers.camelCase)
)

/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param {HTMLElement} element
 * @param {string} attr
 * @returns {Object.<string, number>}
 */
const checkClasses = (element, attr = '') => functionalHelpers.compareArrays(
  attr.split(' '),
  element.className.split(' ')
)

/**
 * Check if the provided Element has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @function
 * @memberOf module:domFunctions
 * @param {HTMLElement} element - Receive the element to be assessed
 * @param {string} key - The attribute name to search for
 * @param {string|Object.<string, string>} attr - The expected value of the attribute to compare against
 * @returns {boolean|Object.<string, number>}
 */
const elementHasAttribute = (element, key, attr) => {
  if (!element.style) {
    return false
  }
  if (key === 'style') {
    return checkStyles(element, attr)
  }
  if (key === 'className') {
    return checkClasses(element, attr)
  }
  const kabobKey = functionalHelpers.kabobCase(key)
  return (element.hasAttribute(kabobKey) && element.getAttribute(kabobKey) === attr)
}

export default elementHasAttribute
