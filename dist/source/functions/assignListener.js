'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _listenerOptions = _interopRequireDefault(require('./listenerOptions'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Provide compatibility for assigning listeners.
 * @function
 * @memberOf module:domFunctions
 * @param {HTMLElementEventMap} trigger - The name of the event which will trigger the listenerFunction on the element.
 * @param {HTMLElement} elem - An element to append the listener onto
 * @param {listenerFunction|function} fn - The function which will be invoked when the
 * event is triggered
 * @param {EventListenerOptions} options - Additional options to how the event will be
 * fired
 * @returns {listenerFunction|function}
 */
const assignListener = function assignListener (trigger, elem, fn, options) {
  // Attaching a listener may be done differently based on the browser support
  if (elem.addEventListener) {
    // Latest support is provided fro addEventListener with the options parameter varying slightly
    elem.addEventListener(trigger, fn, (0, _listenerOptions.default)(options))
  } else if (elem.attachEvent) {
    // Older browsers, especially Internet Explorer
    elem.attachEvent('on'.concat(trigger), fn)
  } else {
    // General support for adding a new function onto the element which can be called to trigger the function
    elem['on'.concat(trigger)] = fn
  }

  return fn
}

const _default = assignListener
exports.default = _default
