'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.async-iterator.for-each.js')
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
require('core-js/stable')
/**
 * Set all the listeners for this DOMItem to be inactive.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which will have its eventListeners updated.
 * @returns {DomItem}
 */
const deactivateListeners = item => {
  for (const eventName in item.eventListeners) {
    item.eventListeners[eventName].forEach(eventListener => eventListener.listenerActive = false)
  }
  delete item.activeListeners
  return item
}
var _default = deactivateListeners
exports.default = _default
