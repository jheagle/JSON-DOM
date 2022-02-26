import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import getParentsFromAttribute from './getParentsFromAttribute.js'

/**
 * Helper for getting all domObjects.DomItems starting at child and having specified tagName
 * @function
 * @memberOf module:domFunctions
 * @returns {Array}
 */
const getParentsByTagName = functionalHelpers.curry(getParentsFromAttribute)('tagName')

export default getParentsByTagName
