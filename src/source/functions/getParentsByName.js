import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import getParentsFromAttribute from './getParentsFromAttribute'

/**
 * Helper for getting all domObjects.DomItems starting at child and having specified name attribute
 * @function
 * @memberOf module:domFunctions
 * @returns {Array}
 */
const getParentsByName = functionalHelpers.curry(getParentsFromAttribute)('name')

export default getParentsByName
