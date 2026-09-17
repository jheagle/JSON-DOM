'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const CAPTURE = 1
const ONCE = 2
const PASSIVE = 4
const SIGNAL = 8

/**
 * Retrieve the OptionsTemplate for EventListenerOptions.
 * @function
 * @memberOf module:optionFlags
 * @returns {OptionsTemplate}
 */
const getListenerOptions = () => ({
  capture: CAPTURE,
  once: ONCE,
  passive: PASSIVE,
  signal: SIGNAL
})
var _default = exports.default = getListenerOptions
