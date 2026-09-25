'use strict'

require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.every.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
/**
 * Whether an item has all of these traits. It is also a type guard: after the check the data of every one of the traits
 * is typed on the item.
 * @param item - The item to check.
 * @param traits - The names of the traits.
 */
const hasTraits = (item, ...traits) => traits.every(trait => (item.has ?? {})[trait] === true)
exports.default = hasTraits
