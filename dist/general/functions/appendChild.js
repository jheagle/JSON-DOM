'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
/**
 * Append a child to the end of given parent's children list.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} parent - The parent that will receive the child.
 * @param {DomItem} child - The new child to attach to the parent.
 * @returns {DomItem}
 */
const appendChild = (parent, child) => {
  parent.children.push(child)
  child.parentItem = parent
  return parent
}
var _default = exports.default = appendChild
