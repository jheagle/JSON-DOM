'use strict'

require('core-js/modules/es.object.define-property.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _listenerOptions = _interopRequireDefault(require('./listenerOptions.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Document attachEvent support for older browsers.
 * @typedef {EventTarget} MicrosoftHtmlObject
 * @property {Function} attachEvent
 */

/**
 * Provide compatibility for assigning listeners.
 * @function
 * @memberOf module:domFunctions
 * @param {string} trigger - The name of the event which will trigger the listenerFunction on the element. (keyof HTMLElementEventMap)
 * @param {EventTarget|MicrosoftHtmlObject} elem - An element to append the listener onto
 * @param {EventListenerOrEventListenerObject|null} fn - The function which will be invoked when the
 * event is triggered
 * @param {EventListenerOptions|boolean} options - Additional options to how the event will be
 * fired
 * @returns {listenerFunction|Function}
 */
var assignListener = function assignListener (trigger, elem, fn) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false
  // Attaching a listener may be done differently based on the browser support
  if (elem.addEventListener) {
    // Latest support is provided from addEventListener with the options parameter varying slightly
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
var _default = assignListener
exports.default = _default
