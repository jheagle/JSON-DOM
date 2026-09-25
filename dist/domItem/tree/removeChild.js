'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
/**
 * Reverse of appendHtml, remove a DomItem and have the associated element removed.
 * @param parent - The parent of the items
 * @param child - The DomItem with HTMLElement to be removed
 */
const removeChild = (parent, child) => {
  parent.element.removeChild(child.element)
  return parent.children.splice(parent.children.indexOf(child), 1)
}
exports.default = removeChild
