'use strict'

require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
/**
 * Set all the listeners for this DOMItem to be inactive.
 * @param item - The DomItem which will have its eventListeners updated.
 */
const deactivateListeners = item => {
  for (const eventName in item.eventListeners) {
    item.eventListeners[eventName].forEach(eventListener => {
      eventListener.listenerActive = false
    })
  }
  delete item.activeListeners
  return item
}
exports.default = deactivateListeners
