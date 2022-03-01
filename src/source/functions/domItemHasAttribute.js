import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import getAssignedStyles from './getAssignedStyles'

/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param domItem
 * @param attr
 * @returns {Object.<string, number>}
 */
const checkStyles = (domItem, attr = {}) => functionalHelpers.compareArrays(
  Object.keys(getAssignedStyles(attr)).map(functionalHelpers.camelCase),
  Object.keys(domItem.attributes.style)
)

/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param domItem
 * @param attr
 * @returns {Object.<string, number>}
 */
const checkClasses = (domItem, attr = '') => functionalHelpers.compareArrays(
  attr.split(' '),
  domItem.attributes.className.split(' ')
)

/**
 * Check if the provided DomItem has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem - Receive the DomItem to be assessed
 * @param {string} key - The attribute name to search for
 * @param {string|Object} attr - The expected value of the attribute to compare against
 * @returns {boolean|Object.<string, number>}
 */
const domItemHasAttribute = (domItem, key, attr) => {
  if (!domItem.attributes) {
    return false
  }
  if (key === 'style') {
    return checkStyles(domItem, attr)
  }
  if (key === 'className') {
    return checkClasses(domItem, attr)
  }
  return (typeof domItem.attributes[key] !== 'undefined' && domItem.attributes[key] === attr)
}

export default domItemHasAttribute
