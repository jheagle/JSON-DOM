'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.object.keys.js')

require('core-js/stable')

/**
 * Get the upper parentItem for the provided child. (usually this is a documentItem reference)
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {module:domObjects~DomItem} item - The DomItem which we want the highest parent item of
 * @returns {module:domObjects~DomItemRoot}
 */
const getTopParentItem = function getTopParentItem (item) {
  return Object.keys(item.parentItem).length ? getTopParentItem(item.parentItem) : item
}

const _default = getTopParentItem
exports.default = _default
