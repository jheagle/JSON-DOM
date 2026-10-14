import 'core-js/stable'
import type { ChildTest, DomItem } from '../types'

/**
 * A selector function for retrieving existing child domGeneral.DomItems from the given parent item.
 * This function will check all the children starting from and including item, and run the test function on each
 * child encountered. The return array contains children returned from the test from all levels.
 * WARNING: This is a recursive function.
 * @param item - The DomItem which may have child items matching the attribute
 * criteria
 * @param test - Assess each child, and return the ones which qualify
 */
const gatherChildItems = (item: DomItem, test: ChildTest): DomItem[] => test(
  item,
  item.children.reduce((a: DomItem[], b) => a.concat(gatherChildItems(b, test)), [])
)

export default gatherChildItems
