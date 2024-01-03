import 'core-js/stable'
import siFunciona from 'si-funciona'
import getAssignedStyles from './getAssignedStyles'

/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param {DomItem} domItem
 * @param {Object.<string, string>} attr
 * @returns {int|Object.<string, number>}
 */
const checkStyles = (domItem, attr = {}) => {
  const assignedStyles = domItem.attributes.style ?? {}
  if (siFunciona.emptyObject(assignedStyles)) {
    return 1
  }
  return siFunciona.compareArrays(
    Object.keys(getAssignedStyles(attr)).map(siFunciona.camelCase),
    Object.keys(assignedStyles)
  )
}

/**
 * For attributes which are objects or multipart strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param {DomItem} domItem
 * @param {string} attr
 * @returns {int|Object.<string, number>}
 */
const checkClasses = (domItem, attr = '') => {
  const assignedClasses = domItem.attributes['className'] ?? ''
  if (!assignedClasses.length) {
    return 1
  }
  return siFunciona.compareArrays(
    attr.split(' '),
    (assignedClasses).split(' ')
  )
}

/**
 * Check if the provided DomItem has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem - Receive the DomItem to be assessed
 * @param {string} key - The attribute name to search for
 * @param {string|Object} attr - The expected value of the attribute to compare against
 * @returns {int|Object.<string, number>}
 */
const domItemHasAttribute = (domItem, key, attr) => {
  if (key === 'style') {
    return checkStyles(domItem, attr)
  }
  if (key === 'className') {
    return checkClasses(domItem, attr)
  }
  const camelKey = siFunciona.camelCase(key)
  if (typeof domItem.attributes[camelKey] === 'undefined') {
    return 1
  }
  if (domItem.attributes[camelKey] === attr) {
    return 0
  }
  return 1
}

export default domItemHasAttribute
