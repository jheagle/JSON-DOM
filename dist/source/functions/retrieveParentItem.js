'use strict'

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
 * module:domObjects~DomItemRoot|module:domObjects~DomItem
 * } parent - A parent DomItem which may or may not have a body
 * @returns {module:domObjects~DomItemBody|module:domObjects~DomItem}
 */
const retrieveParentItem = function retrieveParentItem (parent) {
  return parent.body ? parent.body : parent
}

const _default = retrieveParentItem
exports.default = _default
