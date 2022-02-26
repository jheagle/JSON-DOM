import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import getChildrenFromAttribute from './getChildrenFromAttribute.js'

/**
 * Helper for getting all domObjects.DomItems starting at parent and having specified name attribute
 * @function
 * @memberOf module:domFunctions
 * @returns {DomItem[]}
 */
const getChildrenByName = functionalHelpers.curry(getChildrenFromAttribute)('name')

export default getChildrenByName
