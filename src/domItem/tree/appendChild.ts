import 'core-js/stable'
import type { DomItem } from '../types'

/**
 * Append a child to the end of given parent's children list.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} parent - The parent that will receive the child.
 * @param {DomItem} child - The new child to attach to the parent.
 * @returns {DomItem}
 */
const appendChild = (parent: DomItem, child: DomItem): DomItem => {
  parent.children.push(child)
  child.parentItem = parent
  return parent
}

export default appendChild
