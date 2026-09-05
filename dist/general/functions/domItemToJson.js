'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/es.array.includes.js')
require('core-js/modules/es.json.stringify.js')
require('core-js/stable')
var _removeEmptyProperties = _interopRequireDefault(require('./removeEmptyProperties'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
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
 * @memberOf module:domGeneral
 * @param {DomItem} item
 * @param {Object} [options={}]
 * @param {int} [options.mapLimit=100]
 * @param {int} [options.relevancyRange=1000]
 * @returns {string}
 */
const domItemToJson = function (item) {
  const _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
  const _ref$mapLimit = _ref.mapLimit
  const mapLimit = _ref$mapLimit === void 0 ? 100 : _ref$mapLimit
  const _ref$relevancyRange = _ref.relevancyRange
  const relevancyRange = _ref$relevancyRange === void 0 ? 1000 : _ref$relevancyRange
  return JSON.stringify((0, _removeEmptyProperties.default)(siFunciona.cloneObject(item, {
    mapLimit,
    relevancyRange
  }), ['activeListeners', 'element', 'parentItem', 'body', 'head']), useExclusions)
}
var _default = exports.default = domItemToJson
