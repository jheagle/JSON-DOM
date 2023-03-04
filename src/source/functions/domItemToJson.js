import 'core-js/stable'

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
      return null
    }
    if (key === 'parentItem') {
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
const domItemToJson = item => JSON.stringify(item, useExclusions)

export default domItemToJson
