'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.object.assign.js')

require('core-js/stable')

var _documentItem = _interopRequireDefault(require('../objects/documentItem.js'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _defineProperty (obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }) } else { obj[key] = value } return obj }

/**
 * Register a single listener function as part of the root domObjects.DomItem.
 * @function
 * @memberOf module:domFunctions
 * @param {listenerFunction|function} listener - Provide a function which will be called
 * when a Dom event is triggered.
 * @param {string} [name] - The name of the listener to be used.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which
 * stores has eventListeners property.
 * @returns {Object.<string, listenerFunction>}
 */
var registerListener = function registerListener (listener) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : listener.name
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _documentItem.default
  return Object.assign(parent.eventListeners, _defineProperty({}, name, listener))
}

var _default = registerListener
exports.default = _default
