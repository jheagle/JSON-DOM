'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
require('core-js/stable')
/**
 * For each child of this item, set the parentItem references.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem to have parent references applied.
 * @returns {DomItem}
 */
const setParentItemReferences = item => {
  if (!item.children || !item.children.length) {
    item.children = []
    return item
  }
  item.children.forEach(child => {
    child.parentItem = item
    setParentItemReferences(child)
  })
  return item
}
var _default = exports.default = setParentItemReferences
