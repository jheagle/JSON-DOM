'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.async-iterator.find.js')
require('core-js/modules/esnext.async-iterator.for-each.js')
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.find.js')
require('core-js/modules/esnext.iterator.for-each.js')
require('core-js/stable')
var _createDomItem = _interopRequireDefault(require('../objects/createDomItem'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Update all the children for this domItem to match the domItem element childNodes.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem
 * @returns {DomItem}
 */
const updateChildren = domItem => {
  if (!domItem.element) {
    domItem.children = []
    return domItem
  }
  const previousChildren = domItem.children
  domItem.children = []
  domItem.element.childNodes.forEach((childNode, index) => {
    const existing = previousChildren.find(child => child.element === childNode)
    const child = existing ?? (0, _createDomItem.default)({
      nodeName: childNode.nodeName.toLowerCase(),
      nodeValue: childNode.nodeValue,
      element: childNode
    })
    domItem.children[index] = child
    child.parentItem = domItem
  })
  return domItem
}
var _default = exports.default = updateChildren
