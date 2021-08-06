import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import getParentsFromAttribute from './getParentsFromAttribute'

/**
 * Helper for getting all domObjects.DomItems starting at child and having specified className attribute
 * @function
 * @memberOf module:domFunctions
 * @returns {Array}
 */
const getParentsByClass = functionalHelpers.curry(getParentsFromAttribute)('className')

export default getParentsByClass
