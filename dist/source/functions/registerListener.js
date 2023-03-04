'use strict'

require('core-js/modules/es.symbol.to-primitive.js')
require('core-js/modules/es.date.to-primitive.js')
require('core-js/modules/es.symbol.js')
require('core-js/modules/es.symbol.description.js')
require('core-js/modules/es.object.to-string.js')
require('core-js/modules/es.number.constructor.js')
require('core-js/modules/es.object.define-property.js')
require('core-js/modules/es.symbol.iterator.js')
require('core-js/modules/es.array.iterator.js')
require('core-js/modules/es.string.iterator.js')
require('core-js/modules/web.dom-collections.iterator.js')
function _typeof (obj) { '@babel/helpers - typeof'; return _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj }, _typeof(obj) }
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/es.object.assign.js')
require('core-js/stable')
var _documentItem = _interopRequireDefault(require('../objects/documentItem.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
function _defineProperty (obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }) } else { obj[key] = value } return obj }
function _toPropertyKey (arg) { var key = _toPrimitive(arg, 'string'); return _typeof(key) === 'symbol' ? key : String(key) }
function _toPrimitive (input, hint) { if (_typeof(input) !== 'object' || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || 'default'); if (_typeof(res) !== 'object') return res; throw new TypeError('@@toPrimitive must return a primitive value.') } return (hint === 'string' ? String : Number)(input) }
/**
 * Register a single listener function as part of the root domObjects.DomItem.
 * @function
 * @memberOf module:domFunctions
 * @param {listenerFunction|function} listener - Provide a function which will be called
 * when a Dom event is triggered.
 * @param {string} [name] - The name of the listener to be used.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which stores eventListeners property.
 * @returns {Object.<string, listenerFunction>}
 */
var registerListener = function registerListener (listener) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : listener.name
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _documentItem.default
  return Object.assign(parent.eventListeners, _defineProperty({}, name, listener))
}
var _default = registerListener
exports.default = _default
