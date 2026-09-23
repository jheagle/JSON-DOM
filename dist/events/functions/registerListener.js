'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _documentItem = _interopRequireDefault(require('../../general/objects/documentItem.js'))
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
const registerListener = (listener, name = listener.name, parent = _documentItem.default) => Object.assign(parent.eventActions, {
  [name]: listener
})
const _default = exports.default = registerListener
