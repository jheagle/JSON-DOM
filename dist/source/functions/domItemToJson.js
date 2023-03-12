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
}())

/**
 * Convert DOM Item to JSON string.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item
 * @returns {string}
 */
var domItemToJson = function domItemToJson (item) {
  return JSON.stringify((0, _removeEmptyProperties.default)(item, ['element', 'parentItem', 'body', 'head']), useExclusions)
}
var _default = domItemToJson
exports.default = _default
