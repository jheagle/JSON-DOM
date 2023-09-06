'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.async-iterator.for-each.js')
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
require('core-js/stable')
var _activateListener = _interopRequireDefault(require('./activateListener.js'))
var _applyActiveListeners = _interopRequireDefault(require('./applyActiveListeners'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.
 * @function
 * @memberOf module:domFunctions
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
      item = (0, _activateListener.default)(item, eventName, eventAttributes)
      item.eventListeners[eventName].listenerActive = true
    })
    item = (0, _applyActiveListeners.default)(item, eventName)
  }
  return item
}
var _default = bindElementListeners
exports.default = _default
