import 'core-js/stable'
import siFunciona from 'si-funciona'
import getParentsFromAttribute from './getParentsFromAttribute.js'

/**
 * Helper for getting all domObjects.DomItems starting at child and having specified nodeName
 * @function
 * @memberOf module:domFunctions
 * @returns {Array}
 */
const getParentsByTagName = siFunciona.curry(getParentsFromAttribute)('nodeName')

export default getParentsByTagName
