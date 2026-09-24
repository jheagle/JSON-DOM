import 'core-js/stable'
import type { DomItem, DomItemRoot } from '../types'

/**
 * Get the upper parentItem for the provided child. (usually this is a documentItem reference)
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} item - The DomItem which we want the highest parent item of
 * @returns {DomItemRoot}
 */
const getTopParentItem = (item: DomItem): DomItemRoot => {
  if (item.parentItem === null) {
    if (item.nodeName === '#document') {
      throw new Error('Root parent item must be an empty object, null reference found.')
    }
    throw new Error('Detached child, missing parentItem reference. Use empty object if this is the root item.')
  }
  return Object.keys(item.parentItem).length
    ? getTopParentItem(item.parentItem as DomItem)
    : item as DomItemRoot
}

export default getTopParentItem
