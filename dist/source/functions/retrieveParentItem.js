'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

/**
 * Simplify detecting the parent item which can be appended to, whether root, or just a parent at any part of the tree
 * @function
 * @memberOf module:domFunctions
 * @param {
 * DomItemRoot|DomItem
 * } parent - A parent DomItem which may or may not have a body
 * @returns {DomItemBody|DomItem}
 */
var retrieveParentItem = function retrieveParentItem (parent) {
  return parent.body ? parent.body : parent
}

var _default = retrieveParentItem
exports.default = _default
