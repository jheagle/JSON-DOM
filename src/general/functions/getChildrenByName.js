import 'core-js/stable'
import siFunciona from 'si-funciona'
import getChildrenFromAttribute from './getChildrenFromAttribute.js'

/**
 * Helper for getting all domGeneral.DomItems starting at parent and having specified name attribute
 * @function
 * @memberOf module:domGeneral
 * @param {*} name - The name searched for
 * @param {DomItem} item - The DomItem which may have child items matching the attribute
 * criteria
 * @returns {Array.<DomItem>}
 */
const getChildrenByName = siFunciona.curry(getChildrenFromAttribute)('name')

export default getChildrenByName
