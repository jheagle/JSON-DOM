'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _documentItem = _interopRequireDefault(require('../objects/documentItem.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Register multiple listeners from an array of functions.
 * @function
 * @memberOf module:domFunctions
 * @param {Array.<listenerFunction|function>} listeners - An array of functions to be
 * used as the registered event listeners.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which has eventListeners property.
 * @returns {DomItemRoot|Object}
 */
const registerListeners = function (listeners) {
  const parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _documentItem.default
  _siFunciona.default.mergeObjectsMutable(parent.eventListeners, listeners)
  return parent
}
var _default = exports.default = registerListeners
