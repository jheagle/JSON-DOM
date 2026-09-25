'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
/**
 * Based on available flags, either proceed to process the listener or skip.
 * @typedef {Function} eventHandler
 * @memberOf module:domEvents
 * @param {EventProxy} event - The event object passed to the listener
 */
/**
 * Prepare a listener to be used before assigning to an element.
 * @function
 * @memberOf module:domEvents
 * @param {listenerFunction} listener
 * @param {DomItem} item
 * @param {...*} [args]
 * @returns {eventHandler}
 */
const makeEventHandler = (listener, item, ...args) => {
  return event => {
    if (!event || event.immediatePropagationStopped) {
      return event
    }
    return listener(event, item, ...args)
  }
}
exports.default = makeEventHandler
