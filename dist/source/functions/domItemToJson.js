'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _removeEmptyProperties = _interopRequireDefault(require('./removeEmptyProperties'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
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
}())

/**
 * Convert DOM Item to JSON string.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item
 * @param {Object} [options={}]
 * @param {int} [options.mapLimit=100]
 * @param {int} [options.relevancyRange=1000]
 * @returns {string}
 */
const domItemToJson = function (item) {
  const {
    mapLimit = 100,
    relevancyRange = 1000
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
  return JSON.stringify((0, _removeEmptyProperties.default)(siFunciona.cloneObject(item, {
    mapLimit,
    relevancyRange
  }), ['activeListeners', 'element', 'parentItem', 'body', 'head']), useExclusions)
}
var _default = domItemToJson
exports.default = _default
