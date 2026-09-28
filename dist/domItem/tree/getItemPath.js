'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
/**
 * The path from the root to an item: the index of the item among its parent's children, at each level from the top
 * down. An empty array means the item is the root itself.
 * WARNING: This is a recursive function.
 * @param item - The DomItem to find the path of.
 */
const getItemPath = item => {
  if (item.parentItem === null) {
    throw new Error('Detached child, missing parentItem reference. Use empty object if this is the root item.')
  }
  if (!Object.keys(item.parentItem).length) {
    return []
  }
  const parent = item.parentItem
  return [...getItemPath(parent), parent.children.indexOf(item)]
}
exports.default = getItemPath
