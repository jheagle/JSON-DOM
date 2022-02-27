'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.array.includes.js')

require('core-js/modules/es.string.includes.js')

require('core-js/modules/es.object.keys.js')

require('core-js/stable')

var _documentItem = _interopRequireDefault(require('../objects/documentItem.js'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Based on the provided function / listener name, retrieve the associated function from the root domObjects.DomItem
 * @function
 * @memberOf module:domFunctions
 * @param {string} listenerName - The name of one of the registered listener functions.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which
 * stores has eventListeners property.
 * @returns {listenerFunction|function|Object}
 */
var retrieveListener = function retrieveListener (listenerName) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _documentItem.default
  return Object.keys(parent.eventListeners).includes(listenerName) ? parent.eventListeners[listenerName] : {}
}

var _default = retrieveListener
exports.default = _default
