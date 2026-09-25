'use strict'

require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.reduce.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
/**
 * To be used with gatherChildItems which will start at item and recurse over all child items, this test
 * will then choose which child items will be returned as the result of the test.
 * @callback module:domGeneral~testChildItem
 * @memberOf module:domGeneral
 * @param {DomItem|Object} item - The DomItem is the child being tested
 * @param {Array.<DomItem>} gatheredResults - All of the child items gathered based on
 * the test
 * @returns {Array.<DomItem>}
 */
/**
 * A selector function for retrieving existing child domGeneral.DomItems from the given parent item.
 * This function will check all the children starting from and including item, and run the test function on each
 * child encountered. The return array contains children returned from the test from all levels.
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} item - The DomItem which may have child items matching the attribute
 * criteria
 * @param {module:domGeneral~testChildItem} test - Assess each child, and return the ones which qualify
 * @returns {Array.<DomItem>}
 */
const gatherChildItems = (item, test) => test(item, item.children.reduce((a, b) => a.concat(gatherChildItems(b, test)), []))
exports.default = gatherChildItems
