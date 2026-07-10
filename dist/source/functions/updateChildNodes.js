'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.find.js')
require('core-js/modules/esnext.iterator.for-each.js')
require('core-js/modules/esnext.iterator.map.js')
require('core-js/stable')
var _updateElement = _interopRequireDefault(require('./updateElement.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Update all the childNodes for this domItem element to mach domItem children.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem
 * @returns {DomItem}
 */
const updateChildNodes = domItem => {
  if (!domItem.element) {
    domItem = (0, _updateElement.default)(domItem)
  }
  const previousChildNodes = Array.from(domItem.element.childNodes)
  domItem.children.map((child, index) => {
    const existing = previousChildNodes.find(childNode => childNode === child.element)
    let childNode = existing !== null && existing !== void 0 ? existing : child.element
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
  }).forEach((childNode, index) => {
    domItem.children[index].element = childNode
  })
  if (domItem.element.childNodes.length > domItem.children.length) {
    const maxLength = domItem.children.length
    let nodeToRemove = domItem.element.childNodes[maxLength]
    while (nodeToRemove) {
      domItem.element.removeChild(nodeToRemove)
      nodeToRemove = domItem.element.childNodes[maxLength]
    }
  }
  return domItem
}
var _default = exports.default = updateChildNodes
