'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _documentItem = _interopRequireDefault(require('../../general/objects/documentItem.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Register a single listener function as part of the root domEvents.DomItem.
 * @function
 * @memberOf module:domEvents
 * @param {listenerFunction|function} listener - Provide a function which will be called
 * when a Dom event is triggered.
 * @param {string} [name] - The name of the listener to be used.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which stores eventListeners property.
 * @returns {Object.<string, listenerFunction>}
 */
const registerListener = function (listener) {
  const name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : listener.name
  const parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _documentItem.default
  return Object.assign(parent.eventActions, {
    [name]: listener
  })
}
var _default = exports.default = registerListener
