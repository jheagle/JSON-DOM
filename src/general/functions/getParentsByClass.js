import 'core-js/stable'
import siFunciona from 'si-funciona'
import getParentsFromAttribute from './getParentsFromAttribute.js'

/**
 * Helper for getting all domGeneral.DomItems starting at child and having specified className attribute
 * @function
 * @memberOf module:domGeneral
 * @param {*} className - The className to search for
 * @param {DomItem} item - The DomItem which may have parent items matching the
 * attribute criteria
 * @returns {Array}
 */
const getParentsByClass = siFunciona.curry(getParentsFromAttribute)('className')

export default getParentsByClass
