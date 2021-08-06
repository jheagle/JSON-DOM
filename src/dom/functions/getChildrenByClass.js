import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import getChildrenFromAttribute from './getChildrenFromAttribute'

/**
 * Helper for getting all domObjects.DomItems starting at parent and having specified className attribute
 * @function
 * @memberOf module:domFunctions
 * @returns {module:domObjects~DomItem[]}
 */
const getChildrenByClass = functionalHelpers.curry(getChildrenFromAttribute)('className')

export default getChildrenByClass
