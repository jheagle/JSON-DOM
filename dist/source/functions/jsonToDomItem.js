'use strict'

require('core-js/modules/es.object.define-property.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _setParentItemReferences = _interopRequireDefault(require('./setParentItemReferences.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Convert DOM Item to JSON string.
 * @function
 * @memberOf module:domFunctions
 * @param {string} jsonString
 * @returns {DomItem}
 */
var jsonToDomItem = function jsonToDomItem (jsonString) {
  return (0, _setParentItemReferences.default)(JSON.parse(jsonString))
}
var _default = jsonToDomItem
exports.default = _default
