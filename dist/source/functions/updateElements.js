'use strict'

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

var _updateElement = _interopRequireDefault(require('./updateElement.js'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having child DomItems with config changes to be
 * applied
 * @returns {DomItem}
 */
var updateElements = function updateElements (config) {
  var domItem = (0, _updateElement.default)(config)
  var newChildren = []
  var newChildNodes = []
  domItem.children.forEach(function (child, index) {
    newChildren[index] = updateElements(child)
    newChildNodes[index] = newChildren[index].element
  })
  domItem.children = newChildren

  while (domItem.element.firstChild) {
    domItem.element.removeChild(domItem.element.firstChild)
  }

  if (newChildNodes.length) {
    var _domItem$element;

    (_domItem$element = domItem.element).append.apply(_domItem$element, newChildNodes)
  }

  return domItem
}

var _default = updateElements
exports.default = _default
