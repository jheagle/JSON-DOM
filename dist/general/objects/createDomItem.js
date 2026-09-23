'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _siFunciona = _interopRequireDefault(require('si-funciona'))
const _appendChild = _interopRequireDefault(require('../functions/appendChild.js'))
const _removeChild = _interopRequireDefault(require('../functions/removeChild.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * DomItem defines the structure for a single node in json-dom's Virtual DOM (DomItem tree) - a plain object
 * representation of one HTML element, mirrored onto a real element via {@link updateElement}/{@link renderHtml}.
 * @typedef {Object} DomItem
 * @memberOf module:domGeneral
 * @property {Object.<module:domEvents~EventName, Object.<number, eventHandler>>} activeListeners - Generated property storing assigned
 * listeners.
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * (including the defaulted style object)
 * @property {Array.<DomItem>} children - A reference to an array of child objects
 * @property {(Object|HTMLElement|null)} element - A reference to an existing HTML element will be stored here (default
 * null)
 * @property {Object.<module:domEvents~EventName, module:domEvents~EventListeners>} eventListeners - An object holding all events to be registered for the
 * associated element
 * @property {Array} jsonExclusions - array of properties to exclude
 * @property {string} nodeName - This is any document node name
 * @property {?string} nodeValue - Is a string of text, null for HTML elements
 * @property {DomItem|Object|null} parentItem - A reference to the parent of this object
 * @property {Function} appendChild - Attach a child to this DOM Item
 * @property {Function} removeChild - Attach a child to this DOM Item
 * @property {string} [is] - Optional property to define the type of object for custom elements.
 */

/**
 * This is the basic Object for representing a node in json-dom's Virtual DOM (DomItem tree). All incoming
 * attributes will be merged to the specified format.
 * @function
 * @memberOf module:domGeneral
 * @param {Object} [item={}] - DomItem-like object to be formatted as DomItem
 * @returns {DomItem}
 */
const createDomItem = (item = {}) => {
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
const _default = exports.default = createDomItem
