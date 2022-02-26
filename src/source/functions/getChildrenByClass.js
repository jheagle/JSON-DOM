import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import getChildrenFromAttribute from './getChildrenFromAttribute.js'

/**
 * Helper for getting all domObjects.DomItems starting at parent and having specified className attribute
 * @function
 * @memberOf module:domFunctions
 * @returns {DomItem[]}
 */
const getChildrenByClass = functionalHelpers.curry(getChildrenFromAttribute)('className')

export default getChildrenByClass
