import 'core-js/stable'
import siFunciona from 'si-funciona'
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
 * @memberOf module:domGeneral
 * @param {DomItem} item
 * @param {Object} [options={}]
 * @param {int} [options.mapLimit=100]
 * @param {int} [options.relevancyRange=1000]
 * @returns {string}
 */
const domItemToJson = (item, { mapLimit = 100, relevancyRange = 1000 } = {}) => JSON.stringify(
  removeEmptyProperties(siFunciona.cloneObject(item, { mapLimit, relevancyRange }), [
    'activeListeners',
    'element',
    'parentItem',
    'body',
    'head'
  ]),
  useExclusions
)

export default domItemToJson
