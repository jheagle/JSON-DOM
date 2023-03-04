'use strict'

require('core-js/modules/es.object.define-property.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
/**
 * Set all the listeners for this DOMItem to be inactive.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which will have its eventListeners updated.
 * @returns {DomItem}
 */
var deactivateListeners = function deactivateListeners (item) {
  for (var eventName in item.eventListeners) {
    item.eventListeners[eventName].listenerActive = false
  }
  return item
}
var _default = deactivateListeners
exports.default = _default
