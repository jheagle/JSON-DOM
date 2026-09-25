import 'core-js/stable'
import type { DomItem } from '../types'

/**
 * For each child of this item, set the parentItem references.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} item - The DomItem to have parent references applied.
 * @returns {DomItem}
 */
const setParentItemReferences = (item: DomItem): DomItem => {
  if (!item.children || !item.children.length) {
    item.children = []
    return item
  }
  item.children.forEach(child => {
    child.parentItem = item
    setParentItemReferences(child)
  })
  return item
}

export default setParentItemReferences
