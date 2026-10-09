import 'core-js/stable'
import siFunciona from 'si-funciona'
import { ScopedCollection } from 'collect-your-stuff'
import type { DomItem, DomItemRoot } from '../types'

/** One lookup index per json-dom process: every root's own ids live in their own scope, so two unrelated trees
 * (the server's real tree and a client's independently-built one) never collide even though both number their
 * items starting from the same small integers. */
const itemsById = new ScopedCollection<DomItemRoot, number, DomItem>()

/**
 * The real root above item, or null when item's own parentItem chain never reaches one (an item rendered into
 * some arbitrary, never-rooted container - see renderHtml's own tests - is a legitimate thing to build, just
 * not one forwarding could ever target, so it is not an error for it to have no id-index entry). Unlike
 * getTopParentItem, this never throws: it is used purely to decide whether registration applies, not to assert
 * that a real root exists.
 * @param item
 */
const tryGetRoot = (item: DomItem): DomItemRoot | null => {
  let current: DomItem = item
  while (current.parentItem !== null) {
    if (siFunciona.emptyObject(current.parentItem)) {
      return current as DomItemRoot
    }
    current = current.parentItem as DomItem
  }
  return null
}

/**
 * Register an item (and, recursively, its whole subtree) in its own root's id index, so getItemById can find
 * it. Call once a subtree's relationship to its parent is settled - see renderHtml, which is the one place
 * that happens for a freshly-attached subtree. Does nothing when item is not under a real root yet (or ever).
 * @param item - The subtree to register, root item included.
 */
export const registerItemIds = (item: DomItem): void => {
  const root = tryGetRoot(item)
  if (!root) {
    return
  }
  itemsById.set(root, item.id, item)
  item.children.forEach(registerItemIds)
}

/**
 * Remove an item (and, recursively, its whole subtree) from its own root's id index - the reverse of
 * registerItemIds. Call before the item is actually detached, while its parentItem chain still resolves and
 * its own subtree is still intact to walk.
 * @param item - The subtree to unregister, root item included.
 */
export const unregisterItemIds = (item: DomItem): void => {
  const root = tryGetRoot(item)
  if (!root) {
    return
  }
  itemsById.delete(root, item.id)
  item.children.forEach(unregisterItemIds)
}

/**
 * Resolve an id (as captured off a DomItem's own id) back to the item it refers to, within root's own tree.
 * Throws when the id isn't registered against this root - the same "stale reference" contract getItemByPath
 * already has: a silent wrong-answer resolution is worse than a loud failure.
 * @param root - The tree to resolve the id against.
 * @param id - The id to resolve, as read directly off a DomItem's own id property.
 */
export const getItemById = (root: DomItemRoot, id: number): DomItem => {
  const item = itemsById.get(root, id)
  if (!item) {
    throw new Error(`No item with id ${id} in this tree - it may have been removed, or never belonged to it.`)
  }
  return item
}
