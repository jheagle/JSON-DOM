import 'core-js/stable'
import getAssignedStyles from './getAssignedStyles.js'
import functionalHelpers from 'functional-helpers'

/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param {HTMLElement} element
 * @param {string|Object<string, string>} attr
 * @returns {int|Object.<string, number>}
 */
const checkStyles = (element, attr = {}) => {
  const assignedStyles = getAssignedStyles(element.style) ?? {}
  if (functionalHelpers.emptyObject(assignedStyles)) {
    return 1
  }
  return functionalHelpers.compareArrays(
    Object.keys(attr).map(functionalHelpers.kabobCase),
    Object.keys(assignedStyles)
  )
}

/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param {HTMLElement} element
 * @param {string} attr
 * @returns {int|Object.<string, number>}
 */
const checkClasses = (element, attr = '') => {
  const assignedClasses = Array.from(element.classList)
  if (!assignedClasses.length) {
    return 1
  }
  return functionalHelpers.compareArrays(
    attr.split(' '),
    assignedClasses
  )
}

/**
 * Check if the provided Element has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @function
 * @memberOf module:domFunctions
 * @param {HTMLElement} element - Receive the element to be assessed
 * @param {string} key - The attribute name to search for
 * @param {string|Object.<string, string>} attr - The expected value of the attribute to compare against
 * @returns {int|Object.<string, number>}
 */
const elementHasAttribute = (element, key, attr) => {
  if (key === 'style') {
    return checkStyles(element, attr)
  }
  if (key === 'class') {
    return checkClasses(element, attr)
  }
  const kabobKey = functionalHelpers.kabobCase(key)
  if (!element.hasAttribute(kabobKey)) {
    return 1
  }
  if (element.getAttribute(kabobKey) === attr) {
    return 0
  }
  return 1
}

export default elementHasAttribute
