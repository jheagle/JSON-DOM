'use strict'

require('core-js/modules/es.object.define-property.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/es.array.includes.js')
require('core-js/modules/es.string.includes.js')
require('core-js/modules/es.json.stringify.js')
require('core-js/stable')
var _removeEmptyProperties = _interopRequireDefault(require('./removeEmptyProperties'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
var useExclusions = (function makeExclusions () {
  var jsonExclusions = []
  return function (key, value) {
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
var domItemToJson = function domItemToJson (item) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
  var _ref$mapLimit = _ref.mapLimit
  var mapLimit = _ref$mapLimit === void 0 ? 100 : _ref$mapLimit
  var _ref$relevancyRange = _ref.relevancyRange
  var relevancyRange = _ref$relevancyRange === void 0 ? 1000 : _ref$relevancyRange
  return JSON.stringify((0, _removeEmptyProperties.default)(siFunciona.cloneObject(item, {
    mapLimit: mapLimit,
    relevancyRange: relevancyRange
  }), ['element', 'parentItem', 'body', 'head']), useExclusions)
}
var _default = domItemToJson
exports.default = _default
