'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/web.dom-collections.iterator.js')
require('core-js/stable')
/**
 * A wrapped Event which provides additional utilities.
 * @typedef {Event} EventProxy
 * @memberOf module:domObjects
 * @property {boolean} immediatePropagationStopped
 */
/**
 * Return a modified version of the event.
 * @param {Event} event
 * @returns {EventProxy}
 */
const createEventProxy = event => new Proxy(Object.defineProperty(event, 'immediatePropagationStopped', {
  enumerable: true,
  value: false,
  writable: true
}), {
  get (thisEvent, prop) {
    if (prop === 'stopImmediatePropagation') {
      thisEvent.immediatePropagationStopped = true
    }
    return Reflect.get(...arguments)
  }
})
var _default = createEventProxy
exports.default = _default
