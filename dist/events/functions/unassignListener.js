'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _listenerOptions = _interopRequireDefault(require('./listenerOptions.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Provide compatibility for unassigning listeners.
 * @function
 * @memberOf module:domEvents
 * @param {string} trigger - The name of the event which will trigger the listenerFunction on the element. (keyof HTMLElementEventMap)
 * @param {EventTarget|MicrosoftHtmlObject} elem - An element to append the listener onto
 * @param {EventListenerOrEventListenerObject|null} fn - The function which will be invoked when the
 * event is triggered
 * @param {EventListenerOptions|boolean} options - Additional options to how the event will be
 * fired
 * @returns {listenerFunction|Function}
 */
const unassignListener = function (trigger, elem, fn) {
  const options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false
  // Removing a listener may be done differently based on the browser support
  if (elem.removeEventListener) {
    // Latest support is provided from removeEventListener with the options parameter varying slightly
    elem.removeEventListener(trigger, fn, (0, _listenerOptions.default)(options))
  }
  return fn
}
var _default = exports.default = unassignListener
