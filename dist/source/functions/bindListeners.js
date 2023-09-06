'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _bindElementListeners = _interopRequireDefault(require('./bindElementListeners.js'))
var _siFunciona = _interopRequireDefault(require('si-funciona'))
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
const bindListeners = item => !_siFunciona.default.emptyObject(item.eventListeners) && item.element ? (0, _bindElementListeners.default)(item) : item
var _default = bindListeners
exports.default = _default
