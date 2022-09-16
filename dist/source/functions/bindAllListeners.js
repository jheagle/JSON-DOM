'use strict'

require('core-js/modules/es.array.slice.js')

require('core-js/modules/es.object.to-string.js')

require('core-js/modules/es.array.from.js')

require('core-js/modules/es.string.iterator.js')

require('core-js/modules/es.regexp.exec.js')

require('core-js/modules/es.regexp.test.js')

require('core-js/modules/es.symbol.js')

require('core-js/modules/es.symbol.description.js')

require('core-js/modules/es.symbol.iterator.js')

require('core-js/modules/es.array.iterator.js')

require('core-js/modules/web.dom-collections.iterator.js')

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

var _bindListeners = _interopRequireDefault(require('./bindListeners.js'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _createForOfIteratorHelper (o, allowArrayLike) { var it = typeof Symbol !== 'undefined' && o[Symbol.iterator] || o['@@iterator']; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === 'number') { if (it) o = it; var i = 0; var F = function F () {}; return { s: F, n: function n () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] } }, e: function e (_e) { throw _e }, f: F } } throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') } var normalCompletion = true; var didErr = false; var err; return { s: function s () { it = it.call(o) }, n: function n () { var step = it.next(); normalCompletion = step.done; return step }, e: function e (_e2) { didErr = true; err = _e2 }, f: function f () { try { if (!normalCompletion && it.return != null) it.return() } finally { if (didErr) throw err } } } }

function _unsupportedIterableToArray (o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen) }

function _arrayLikeToArray (arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i] } return arr2 }

/**
 * Based on the eventListeners property of the provided item, bind the listeners to the associated element property
 * for each item in the domObjects.DomItem structure.
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem with an associated HTMLElement to have a listener
 * assigned
 * @returns {DomItem}
 */
var bindAllListeners = function bindAllListeners (item) {
  var _iterator = _createForOfIteratorHelper(item.children)
  var _step

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value
      bindAllListeners(child)
    }
  } catch (err) {
    _iterator.e(err)
  } finally {
    _iterator.f()
  }

  return (0, _bindListeners.default)(item)
}

var _default = bindAllListeners
exports.default = _default
