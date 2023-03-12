import 'core-js/stable'
import removeEmptyProperties from './removeEmptyProperties'

const useExclusions = (function makeExclusions () {
  let jsonExclusions = []
  return (key, value) => {
    if (key === 'jsonExclusions') {
      jsonExclusions = value
      return value
    }
    if (jsonExclusions.includes(key)) {
      return undefined
    }
    if (key === 'element') {
      // Exclude html nodes
      return null
    }
    if (key === 'parentItem') {
      // Exclude circular parentItem references
      return null
    }
    if (key === 'body' || key === 'head') {
      // Exclude body and head child references from #document
      return null
    }
    return value
  }
})()

/**
 * Convert DOM Item to JSON string.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item
 * @returns {string}
 */
const domItemToJson = item => JSON.stringify(
  removeEmptyProperties(item, [
    'element',
    'parentItem',
    'body',
    'head'
  ]),
  useExclusions
)

export default domItemToJson
