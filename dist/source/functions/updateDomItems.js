'use strict'

require('core-js/modules/es.array.slice.js')

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

require('core-js/modules/es.object.to-string.js')

require('core-js/modules/esnext.async-iterator.for-each.js')

require('core-js/modules/esnext.iterator.constructor.js')

require('core-js/modules/esnext.iterator.for-each.js')

require('core-js/modules/web.dom-collections.for-each.js')

require('core-js/stable')

var _updateChildren = _interopRequireDefault(require('./updateChildren.js'))

var _updateDomItem = _interopRequireDefault(require('./updateDomItem.js'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _createForOfIteratorHelper (o, allowArrayLike) { var it = typeof Symbol !== 'undefined' && o[Symbol.iterator] || o['@@iterator']; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === 'number') { if (it) o = it; var i = 0; var F = function F () {}; return { s: F, n: function n () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] } }, e: function e (_e) { throw _e }, f: F } } throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') } var normalCompletion = true; var didErr = false; var err; return { s: function s () { it = it.call(o) }, n: function n () { var step = it.next(); normalCompletion = step.done; return step }, e: function e (_e2) { didErr = true; err = _e2 }, f: function f () { try { if (!normalCompletion && it.return != null) it.return() } finally { if (didErr) throw err } } } }

function _unsupportedIterableToArray (o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen) }

function _arrayLikeToArray (arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i] } return arr2 }

/**
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having child DomItems with config changes to be
 * applied
 * @returns {DomItem}
 */
var updateDomItems = function updateDomItems (config) {
  if (config.nodeName === '#document') {
    var _iterator = _createForOfIteratorHelper(config.children)
    var _step

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value
        updateDomItems(child)
      }
    } catch (err) {
      _iterator.e(err)
    } finally {
      _iterator.f()
    }

    return config
  }

  var domItem = (0, _updateChildren.default)((0, _updateDomItem.default)(config))
  domItem.children.forEach(updateDomItems)
  return domItem
}

var _default = updateDomItems
exports.default = _default
