'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.array.splice.js')

require('core-js/modules/es.array.index-of.js')

require('core-js/stable')

/**
 * Reverse of appendHtml, remove a DomItem and have the associated element removed.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} parent - The parent of the items
 * @param {DomItem} child - The DomItem with HTMLElement to be removed
 * @returns {Array.<DomItem>}
 */
var removeChild = function removeChild (parent, child) {
  parent.element.removeChild(child.element)
  return parent.children.splice(parent.children.indexOf(child), 1)
}

var _default = removeChild
exports.default = _default
