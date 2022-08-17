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

require('core-js/modules/es.array.find.js')

require('core-js/modules/esnext.async-iterator.find.js')

require('core-js/modules/esnext.iterator.find.js')

require('core-js/stable')

var _updateDomItem = _interopRequireDefault(require('./updateDomItem.js'))

var _createDomItem = _interopRequireDefault(require('../objects/createDomItem'))

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
var updateDomItems = function updateDomItems (config) {
  var domItem = (0, _updateDomItem.default)(config)
  var newChildren = []
  domItem.element.childNodes.forEach(function (childNode, index) {
    var existing = domItem.children.find(function (child) {
      return child.element === childNode
    })
    newChildren[index] = updateDomItems(existing !== null && existing !== void 0 ? existing : (0, _createDomItem.default)({
      nodeName: childNode.nodeName.toLowerCase(),
      nodeValue: childNode.nodeValue,
      element: childNode
    }))
  })
  domItem.children = newChildren
  return domItem
}

var _default = updateDomItems
exports.default = _default
