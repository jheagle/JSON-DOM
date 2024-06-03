'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _appendChild = _interopRequireDefault(require('../functions/appendChild.js'))
var _removeChild = _interopRequireDefault(require('../functions/removeChild'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * This is the standard definition of a listenerFunction to be used
 * @callback listenerFunction
 * @memberOf module:domObjects
 * @param {Event|EventProxy} e - The event object passed to the listener
 * @param {DomItem} target - The element which triggered the event
 * @param {...*} [args] - Optional args as required by the listener
 */

/**
 * A Boolean indicating whether events of this type will be dispatched to the registered listerFunction before being
 * dispatched to any EventTarget beneath it in the Dom tree.
 * @typedef {boolean} UseCapture
 * @memberOf module:domObjects
 */

/**
 * OptionsObject defines the structure for the options to be passed to addEventListener
 * @typedef {Object} OptionsObject
 * @memberOf module:domObjects
 * @property {boolean} capture - Indicate that events of this type will be dispatched to the registered
 * listenerFunction before being dispatched to any EventTarget beneath it in the Dom tree.
 * @property {boolean} once - Indicate that the listenerFunction should be invoked at most once after being added. If
 * 'true', the listenerFunction would be automatically removed when invoked.
 * @property {boolean} passive - Indicate that, if 'true', indicates that the listenerFunction will never call
 * preventDefault(). If preventDefault() is called, the user agent will do nothing with it.
 * @property {boolean} signal - The listener will be removed when the given AbortSignal object's abort() method is
 * called. If not specified, no AbortSignal is associated with the listener.
 */

/**
 * EventListenerOptions is either a boolean as UseCapture or an Object as OptionsObject
 * @typedef {OptionsObject|UseCapture} EventListenerOptions
 * @memberOf module:domObjects
 */

/**
 * An EventListener Object to be appended to the element within the DomItem
 * @typedef {Object} EventListener
 * @memberOf module:domObjects
 * @property {string} listenerFunc - A string function name matching an existing {@link listenerFunction}.
 * @property {Object} listenerArgs - Additional args required for the listener function
 * @property {EventListenerOptions} listenerOptions - Provides support for options parameter of addEventListener, or false for default
 * @property {boolean} listenerActive - Indicate whether this listener has been applied to the element.
 */

/**
 * One or more listeners assigned to the same event.
 * @typedef {Array.<EventListener>} EventListeners
 * @memberOf module:domObjects
 */

/**
 * The name of the trigger used to fire the event.
 * @typedef {string} EventName
 * @memberOf module:domObjects
 */

/**
 * DomItem defines the structure for a single element in the Dom
 * @typedef {Object} DomItem
 * @memberOf module:domObjects
 * @property {Object.<EventName, Object.<number, eventHandler>>} activeListeners - Generated property storing assigned
 * listeners.
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * (including the defaulted style object)
 * @property {Array.<DomItem>} children - A reference to an array of child objects
 * @property {(Object|HTMLElement|null)} element - A reference to an existing HTML element will be stored here (default
 * null)
 * @property {Object.<EventName, EventListeners>} eventListeners - An object holding all events to be registered for the
 * associated element
 * @property {Array} jsonExclusions - array of properties to exclude
 * @property {string} nodeName - This is any document node name
 * @property {?string} nodeValue - Is a string of text, null for HTML elements
 * @property {DomItem|Object|null} parentItem - A reference to the parent of this object
 * @property {Function} appendChild - Attach a child to this DOM Item
 * @property {Function} removeChild - Attach a child to this DOM Item
 */

/**
 * This is the basic Object for representing the Dom from a virtual perspective. All incoming attributes will be merged
 * to the specified format.
 * @function
 * @memberOf module:domObjects
 * @param {Object} [item={}] - DomItem-like object to be formatted as DomItem
 * @returns {DomItem}
 */
const createDomItem = function () {
  const item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  const newDomItem = _siFunciona.default.reduceObject({
    attributes: {},
    children: [],
    element: null,
    eventListeners: {},
    jsonExclusions: [],
    nodeName: 'div',
    nodeValue: null,
    parentItem: null
  }, (domItem, defaultValue, prop) => {
    if (!(prop in domItem)) {
      domItem[prop] = defaultValue
      return domItem
    }
    return domItem
  }, item)
  newDomItem.appendChild = _siFunciona.default.curry(_appendChild.default)(newDomItem)
  newDomItem.removeChild = _siFunciona.default.curry(_removeChild.default)(newDomItem)
  return newDomItem
}
var _default = exports.default = createDomItem
