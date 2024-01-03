import 'core-js/stable'
import siFunciona from 'si-funciona'
import getChildrenFromAttribute from './getChildrenFromAttribute.js'

/**
 * Helper for getting all domObjects.DomItems starting at parent and having specified name attribute
 * @function
 * @memberOf module:domFunctions
 * @returns {DomItem[]}
 */
const getChildrenByName = siFunciona.curry(getChildrenFromAttribute)('name')

export default getChildrenByName
