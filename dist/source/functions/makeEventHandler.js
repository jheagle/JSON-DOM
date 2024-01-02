'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
/**
 * Based on available flags, either proceed to process the listener or skip.
 * @typedef {Function} eventHandler
 * @memberOf module:domObjects
 * @param {EventProxy} event - The event object passed to the listener
 */

/**
 * Prepare a listener to be used before assigning to an element.
 * @param {listenerFunction} listener
 * @param {DomItem} item
 * @param {...*} [args]
 * @returns {eventHandler}
 */
const makeEventHandler = function (listener, item) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key]
  }
  return event => {
    if (!event || event.immediatePropagationStopped) {
      return event
    }
    return listener(event, item, ...args)
  }
}
var _default = exports.default = makeEventHandler
