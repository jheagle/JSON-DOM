import 'core-js/stable'
import documentItem from '../domItem/objects/documentItem'
import insertChild from '../domItem/tree/insertChild'
import setParentItemReferences from '../domItem/tree/setParentItemReferences'
import updateChildNodes from './updateChildNodes'
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
  const itemToRender: DomItem = item === null ? documentItem : item
  // Every descendant needs its parentItem chain in place before anything below tries to walk up it (a listener
  // being bound looks up its root via getTopParentItem) - set it first, rather than after rendering the subtree.
  setParentItemReferences(itemToRender)
  if (itemToRender.parentItem === null) {
    // excluding when documentItem was passed in, insert the item into parent, and place its real element among
    // parent's real children - scoped to just this positioning, not a resync of parent's whole existing subtree
    // (updateElements(parent) would walk every sibling's attributes too, reverting anything about them - like a
    // style change some other, unrelated script made directly on the real DOM - that parent's items don't track)
    insertChild(parent, item as DomItem, index)
    updateChildNodes(parent)
  }
  // Render the elements and return either to original reference, or updated documentItem (whichever is available)
  const updatedItem = updateElements(itemToRender)
  return item ?? updatedItem
}

export default renderHtml
