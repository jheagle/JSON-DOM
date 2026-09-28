import 'core-js/stable'
import documentItem from '../domItem/objects/documentItem'
import insertChild from '../domItem/tree/insertChild'
import setParentItemReferences from '../domItem/tree/setParentItemReferences'
import updateElements from './updateElements'
import type { DomItem } from '../domItem/types'

/**
 * This is a shortcut for syncing a Virtual DOM (DomItem tree) item onto the real HTML DOM: builds the real elements
 * for it and its descendants, inserts them into parent's children (the document body by default), and binds their
 * associated listeners.
 * @param item - The DomItem that we want to render the element for
 * @param parent - Where to insert item, when it does not already have a parent - defaults to the
 * document body, so passing nothing keeps working exactly as before
 * @param index - Where in parent's children to put item - defaults to the end (a plain append), so passing nothing
 * keeps working exactly as before. To insert item among parent's already-rendered content (existing real HTML),
 * parent's children must already reflect that content first - see {@link updateDomItems}, which captures the real
 * DOM into items. Skipping that step and inserting anyway will make the next render remove the untracked content,
 * since it is invisible to parent.children.
 */
const renderHtml = (item: DomItem | null = null, parent: DomItem = documentItem.body, index: number = parent.children.length): DomItem => {
  let itemToRender: DomItem = item === null ? documentItem : item
  if (itemToRender.parentItem === null) {
    // excluding when documentItem was passed in, insert the item into parent
    itemToRender = insertChild(parent, item as DomItem, index)
  }
  // Render the elements and return either to original reference, or updated documentItem (whichever is available)
  const updatedItem = updateElements(setParentItemReferences(itemToRender))
  return item ?? updatedItem
}

export default renderHtml
