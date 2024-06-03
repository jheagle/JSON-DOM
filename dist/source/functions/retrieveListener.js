'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _documentItem = _interopRequireDefault(require('../objects/documentItem.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Based on the provided function / listener name, retrieve the associated function from the root domObjects.DomItem
 * @function
 * @memberOf module:domFunctions
 * @param {string} listenerName - The name of one of the registered listener functions.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which stores eventListeners property.
 * @returns {listenerFunction|function|Object}
 */
const retrieveListener = function (listenerName) {
  const parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _documentItem.default
  return Object.keys(parent.eventListeners).includes(listenerName) ? parent.eventListeners[listenerName] : (function (e) {
    throw e
  }(`Undefined listener function on this DomItemRoot: ${listenerName}`))
}
var _default = exports.default = retrieveListener
