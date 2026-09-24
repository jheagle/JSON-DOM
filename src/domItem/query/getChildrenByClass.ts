import 'core-js/stable'
import siFunciona from 'si-funciona'
import getChildrenFromAttribute from './getChildrenFromAttribute'

/**
 * Helper for getting all domGeneral.DomItems starting at parent and having specified className attribute
 * @function
 * @memberOf module:domGeneral
 * @param {*} className - The className searched for
 * @param {DomItem} item - The DomItem which may have child items matching the attribute
 * criteria
 * @returns {Array.<DomItem>}
 */
const getChildrenByClass = siFunciona.curry(getChildrenFromAttribute)('className')

export default getChildrenByClass
