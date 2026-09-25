'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
/**
 * Return a modified version of the event.
 * @param event
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
    // Read from the event itself rather than the proxy: Event's methods and accessors rely on internal slots
    // (private fields since Node 24), which throw when `this` is the proxy.
    const value = Reflect.get(thisEvent, prop)
    return typeof value === 'function' && prop !== 'constructor' ? value.bind(thisEvent) : value
  }
})
exports.default = createEventProxy
