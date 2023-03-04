'use strict'

require('core-js/modules/es.object.define-property.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _bindElementListeners = _interopRequireDefault(require('./bindElementListeners.js'))
var _functionalHelpers = _interopRequireDefault(require('functional-helpers'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Based on the eventListeners property of the provided item, bind the
 * listeners to the associated element property for the provided domObjects.DomItem.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which may have eventListeners to apply to its
 * element
 * @returns {DomItem}
 */
var bindListeners = function bindListeners (item) {
  return !_functionalHelpers.default.emptyObject(item.eventListeners) && item.element ? (0, _bindElementListeners.default)(item) : item
}
var _default = bindListeners
exports.default = _default
