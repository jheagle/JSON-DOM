'use strict'

require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
const __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule
    ? mod
    : {
        default: mod
      }
}
Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
const activateListener_1 = __importDefault(require('./activateListener'))
const applyActiveListeners_1 = __importDefault(require('./applyActiveListeners'))
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
      item = (0, activateListener_1.default)(eventName, eventAttributes, item)
      eventAttributes.listenerActive = true
    })
    item = (0, applyActiveListeners_1.default)(eventName, item)
  }
  return item
}
exports.default = bindElementListeners
