'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.array.reduce.js')

require('core-js/modules/es.array.concat.js')

require('core-js/stable')

/**
 * To be used with gatherChildItems which will start at item and recurse over all child items, this test
 * will then choose which child items will be returned as the result of the test.
 * @callback module:domFunctions~testChildItem
 * @memberOf module:domFunctions
 * @param {module:domObjects~DomItem|Object} item - The DomItem is the child being tested
 * @param {Array.<module:domObjects~DomItem>} gatheredResults - All of the child items gathered based on
 * the test
 * @returns {Array.<module:domObjects~DomItem>}
 */

/**
 * A selector function for retrieving existing child domObjects.DomItems from the given parent item.
 * This function will check all the children starting from and including item, and run the test function on each
 * child encountered. The return array contains children returned from the test from all levels.
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {module:domObjects~DomItem} item - The DomItem which may have child items matching the attribute
 * criteria
 * @param {module:domFunctions~testChildItem} test - Assess each child, and return the ones which qualify
 * @returns {Array.<module:domObjects~DomItem>}
 */
const gatherChildItems = function gatherChildItems (item, test) {
  return test(item, item.children.reduce(function (a, b) {
    return a.concat(gatherChildItems(b, test))
  }, []))
}

const _default = gatherChildItems
exports.default = _default
