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
/**
 * For each child of this item, set the parentItem references.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem to have parent references applied.
 * @returns {DomItem}
 */
var setParentItemReferences = function setParentItemReferences (item) {
  item.children.forEach(function (child) {
    child.parentItem = item
    setParentItemReferences(child)
  })
  return item
}
var _default = setParentItemReferences
exports.default = _default
