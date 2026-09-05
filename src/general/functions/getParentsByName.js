import 'core-js/stable'
import siFunciona from 'si-funciona'
import getParentsFromAttribute from './getParentsFromAttribute.js'

/**
 * Helper for getting all domGeneral.DomItems starting at child and having specified name attribute
 * @function
 * @memberOf module:domGeneral
 * @param {*} name - The name to search for
 * @param {DomItem} item - The DomItem which may have parent items matching the
 * attribute criteria
 * @returns {Array}
 */
const getParentsByName = siFunciona.curry(getParentsFromAttribute)('name')

export default getParentsByName
