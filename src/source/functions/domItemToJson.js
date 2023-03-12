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
  removeEmptyProperties(siFunciona.cloneObject(item), [
    'element',
    'parentItem',
    'body',
    'head'
  ]),
  useExclusions
)

export default domItemToJson
