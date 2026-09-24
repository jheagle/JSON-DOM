import 'core-js/stable'
import appendChild from '../domItem/tree/appendChild'
import documentItem from '../domItem/objects/documentItem'
import setParentItemReferences from '../domItem/tree/setParentItemReferences'
import updateElements from './updateElements'
import type { DomItem } from '../domItem/types'

/**
 * This is a shortcut for syncing a Virtual DOM (DomItem tree) item onto the real HTML DOM: builds the real elements
 * for it and its descendants, appends them to parent (the document body by default), and binds their associated
 * listeners.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem|null} item - The DomItem that we want to render the element for
 * @param {DomItem} [parent] - Where to append item, when it does not already have a parent - defaults to the
 * document body, so passing nothing keeps working exactly as before
 * @returns {DomItem}
 */
const renderHtml = (item: DomItem | null = null, parent: DomItem = documentItem.body): DomItem => {
  let itemToRender: DomItem = item === null ? documentItem : item
  if (itemToRender.parentItem === null) {
    // excluding when documentItem was passed in, append the item to parent
    itemToRender = appendChild(parent, item as DomItem)
  }
  // Render the elements and return either to original reference, or updated documentItem (whichever is available)
  const updatedItem = updateElements(setParentItemReferences(itemToRender))
  return item ?? updatedItem
}

export default renderHtml
