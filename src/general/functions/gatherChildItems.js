import 'core-js/stable'

/**
 * To be used with gatherChildItems which will start at item and recurse over all child items, this test
 * will then choose which child items will be returned as the result of the test.
 * @callback module:domFunctions~testChildItem
 * @memberOf module:domFunctions
 * @param {DomItem|Object} item - The DomItem is the child being tested
 * @param {Array.<DomItem>} gatheredResults - All of the child items gathered based on
 * the test
 * @returns {Array.<DomItem>}
 */

/**
 * A selector function for retrieving existing child domObjects.DomItems from the given parent item.
 * This function will check all the children starting from and including item, and run the test function on each
 * child encountered. The return array contains children returned from the test from all levels.
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which may have child items matching the attribute
 * criteria
 * @param {module:domFunctions~testChildItem} test - Assess each child, and return the ones which qualify
 * @returns {Array.<DomItem>}
 */
const gatherChildItems = (item, test) => test(
  item,
  item.children.reduce((a, b) => a.concat(gatherChildItems(b, test)), [])
)

export default gatherChildItems
