'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _siFunciona = _interopRequireDefault(require('si-funciona'))
const _documentItem = _interopRequireDefault(require('../../general/objects/documentItem.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Register multiple listeners from an array of functions.
 * @function
 * @memberOf module:domEvents
 * @param {Array.<listenerFunction|function>} listeners - An array of functions to be
 * used as the registered event listeners.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which has eventActions property.
 * @returns {DomItemRoot|Object}
 */
const registerListeners = (listeners, parent = _documentItem.default) => {
  _siFunciona.default.mergeObjectsMutable(parent.eventActions, listeners)
  return parent
}
const _default = exports.default = registerListeners
