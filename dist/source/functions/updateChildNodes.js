'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.array.from.js')

require('core-js/modules/es.string.iterator.js')

require('core-js/modules/es.object.to-string.js')

require('core-js/modules/esnext.async-iterator.for-each.js')

require('core-js/modules/esnext.iterator.constructor.js')

require('core-js/modules/esnext.iterator.for-each.js')

require('core-js/modules/web.dom-collections.for-each.js')

require('core-js/modules/es.array.map.js')

require('core-js/modules/esnext.async-iterator.map.js')

require('core-js/modules/esnext.iterator.map.js')

require('core-js/modules/es.array.find.js')

require('core-js/modules/esnext.async-iterator.find.js')

require('core-js/modules/esnext.iterator.find.js')

require('core-js/stable')

var _updateElement = _interopRequireDefault(require('./updateElement.js'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Update all the childNodes for this domItem element to mach domItem children.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem
 * @returns {DomItem}
 */
var updateChildNodes = function updateChildNodes (domItem) {
  if (!domItem.element) {
    domItem = (0, _updateElement.default)(domItem)
  }

  var previousChildNodes = Array.from(domItem.element.childNodes)
  domItem.children.map(function (child, index) {
    var existing = previousChildNodes.find(function (childNode) {
      return childNode === child.element
    })
    var childNode = existing !== null && existing !== void 0 ? existing : child.element

    if (!childNode) {
      childNode = (0, _updateElement.default)(child).element
    }

    if (!previousChildNodes[index]) {
      domItem.element.appendChild(childNode)
      return childNode
    }

    if (childNode !== previousChildNodes[index]) {
      domItem.element.replaceChild(childNode, previousChildNodes[index])
    }

    return childNode
  }).forEach(function (childNode, index) {
    domItem.children[index].element = childNode
  })
  return domItem
}

var _default = updateChildNodes
exports.default = _default
