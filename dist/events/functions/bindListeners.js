'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _bindElementListeners = _interopRequireDefault(require('./bindElementListeners.js'))
const _siFunciona = _interopRequireDefault(require('si-funciona'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Based on the eventListeners property of the provided item, bind the
 * listeners to the associated element property for the provided domEvents.DomItem.
 * @function
 * @memberOf module:domEvents
 * @param {DomItem} item - The DomItem which may have eventListeners to apply to its
 * element
 * @returns {DomItem}
 */
const bindListeners = item => !_siFunciona.default.emptyObject(item.eventListeners) && item.element ? (0, _bindElementListeners.default)(item) : item
const _default = exports.default = bindListeners
