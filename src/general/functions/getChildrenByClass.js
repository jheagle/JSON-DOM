import 'core-js/stable'
import siFunciona from 'si-funciona'
import getChildrenFromAttribute from './getChildrenFromAttribute.js'

/**
 * Helper for getting all domObjects.DomItems starting at parent and having specified className attribute
 * @function
 * @memberOf module:domFunctions
 * @param {*} className - The className searched for
 * @param {DomItem} item - The DomItem which may have child items matching the attribute
 * criteria
 * @returns {Array.<DomItem>}
 */
const getChildrenByClass = siFunciona.curry(getChildrenFromAttribute)('className')

export default getChildrenByClass
