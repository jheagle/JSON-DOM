'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/web.dom-collections.iterator.js')
require('core-js/stable')
var _bindListeners = _interopRequireDefault(require('./bindListeners.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Based on the eventListeners property of the provided item, bind the listeners to the associated element property
 * for each item in the domEvents.DomItem structure.
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domEvents
 * @param {DomItem} item - The DomItem with an associated HTMLElement to have a listener
 * assigned
 * @returns {DomItem}
 */
const bindAllListeners = item => {
  for (const child of item.children) {
    bindAllListeners(child)
  }
  return (0, _bindListeners.default)(item)
}
var _default = exports.default = bindAllListeners
