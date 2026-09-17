'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
require('core-js/stable')
var _activateListener = _interopRequireDefault(require('./activateListener.js'))
var _applyActiveListeners = _interopRequireDefault(require('./applyActiveListeners.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.
 * @function
 * @memberOf module:domEvents
 * @param {DomItem} item - The DomItem which has eventListeners to apply to its element
 * @returns {DomItem}
 */
const bindElementListeners = item => {
  for (const eventName in item.eventListeners) {
    const listeners = item.eventListeners[eventName]
    listeners.forEach(eventAttributes => {
      if (eventAttributes.listenerActive) {
        return
      }
      item = (0, _activateListener.default)(eventName, eventAttributes, item)
      eventAttributes.listenerActive = true
    })
    item = (0, _applyActiveListeners.default)(eventName, item)
  }
  return item
}
var _default = exports.default = bindElementListeners
