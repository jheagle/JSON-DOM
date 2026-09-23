'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/es.array.includes.js')
require('core-js/stable')
const _documentItem = _interopRequireDefault(require('../../general/objects/documentItem.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Based on the provided function / listener name, retrieve the associated function from the root domEvents.DomItem.
 * If a raw function is passed instead of a registered name, it is returned as-is - see {@link EventListener}'s
 * listenerFunc property for the tradeoffs of that discretionary path.
 * @function
 * @memberOf module:domEvents
 * @param {string|listenerFunction} listenerName - The name of one of the registered listener functions, or an
 * already-resolved listener function.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which stores eventListeners property.
 * @returns {listenerFunction|function|Object}
 */
const retrieveListener = (listenerName, parent = _documentItem.default) => {
  if (typeof listenerName === 'function') {
    return listenerName
  }
  if (!Object.keys(parent.eventActions).includes(listenerName)) {
    throw new Error(`Undefined listener function on this DomItemRoot: ${listenerName}`)
  }
  return parent.eventActions[listenerName]
}
const _default = exports.default = retrieveListener
