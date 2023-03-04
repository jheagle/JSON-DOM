import 'core-js/stable'
import setParentItemReferences from './setParentItemReferences.js'

/**
 * Convert DOM Item to JSON string.
 * @function
 * @memberOf module:domFunctions
 * @param {string} jsonString
 * @returns {DomItem}
 */
const jsonToDomItem = jsonString => {
  return setParentItemReferences(JSON.parse(jsonString))
}

export default jsonToDomItem
