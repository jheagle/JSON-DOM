import 'core-js/stable'
import siFunciona from 'si-funciona'
import type { DomItem, DomItemRoot } from '../types'

/**
 * Get the upper parentItem for the provided child. (usually this is a documentItem reference)
 * WARNING: This is a recursive function.
 * @param item - The DomItem which we want the highest parent item of
 */
const getTopParentItem = (item: DomItem): DomItemRoot => {
  if (item.parentItem === null) {
    if (item.nodeName === '#document') {
      throw new Error('Root parent item must be an empty object, null reference found.')
    }
    throw new Error('Detached child, missing parentItem reference. Use empty object if this is the root item.')
  }
  return siFunciona.emptyObject(item.parentItem)
    ? item as DomItemRoot
    : getTopParentItem(item.parentItem as DomItem)
}

export default getTopParentItem
