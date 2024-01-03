import 'core-js/stable'
import siFunciona from 'si-funciona'
import getParentsFromAttribute from './getParentsFromAttribute.js'

/**
 * Helper for getting all domObjects.DomItems starting at child and having specified name attribute
 * @function
 * @memberOf module:domFunctions
 * @returns {Array}
 */
const getParentsByName = siFunciona.curry(getParentsFromAttribute)('name')

export default getParentsByName
