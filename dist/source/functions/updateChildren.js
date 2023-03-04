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
var _createDomItem = _interopRequireDefault(require('../objects/createDomItem'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Update all the children for this domItem to match the domItem element childNodes.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem
 * @returns {DomItem}
 */
var updateChildren = function updateChildren (domItem) {
  if (!domItem.element) {
    domItem.children = []
    return domItem
  }
  var previousChildren = domItem.children
  domItem.children = []
  domItem.element.childNodes.forEach(function (childNode, index) {
    var existing = previousChildren.find(function (child) {
      return child.element === childNode
    })
    var child = existing !== null && existing !== void 0 ? existing : (0, _createDomItem.default)({
      nodeName: childNode.nodeName.toLowerCase(),
      nodeValue: childNode.nodeValue,
      element: childNode
    })
    domItem.children[index] = child
    child.parentItem = domItem
  })
  return domItem
}
var _default = updateChildren
exports.default = _default
