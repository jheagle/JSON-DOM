'use strict'

require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
const __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule
    ? mod
    : {
        default: mod
      }
}
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.getItemById = exports.unregisterItemIds = exports.registerItemIds = void 0
require('core-js/stable')
const si_funciona_1 = __importDefault(require('si-funciona'))
const collect_your_stuff_1 = require('collect-your-stuff')
/** One lookup index per json-dom process: every root's own ids live in their own scope, so two unrelated trees
 * (the server's real tree and a client's independently-built one) never collide even though both number their
 * items starting from the same small integers. */
const itemsById = new collect_your_stuff_1.ScopedCollection()
/**
 * The real root above item, or null when item's own parentItem chain never reaches one (an item rendered into
 * some arbitrary, never-rooted container - see renderHtml's own tests - is a legitimate thing to build, just
 * not one forwarding could ever target, so it is not an error for it to have no id-index entry). Unlike
 * getTopParentItem, this never throws: it is used purely to decide whether registration applies, not to assert
 * that a real root exists.
 * @param item
 */
const tryGetRoot = item => {
  let current = item
  while (current.parentItem !== null) {
    if (si_funciona_1.default.emptyObject(current.parentItem)) {
      return current
    }
    current = current.parentItem
  }
  return null
}
/**
 * Register an item (and, recursively, its whole subtree) in its own root's id index, so getItemById can find
 * it. Call once a subtree's relationship to its parent is settled - see renderHtml, which is the one place
 * that happens for a freshly-attached subtree. Does nothing when item is not under a real root yet (or ever).
 * @param item - The subtree to register, root item included.
 */
const registerItemIds = item => {
  const root = tryGetRoot(item)
  if (!root) {
    return
  }
  itemsById.set(root, item.id, item)
  item.children.forEach(exports.registerItemIds)
}
exports.registerItemIds = registerItemIds
/**
 * Remove an item (and, recursively, its whole subtree) from its own root's id index - the reverse of
 * registerItemIds. Call before the item is actually detached, while its parentItem chain still resolves and
 * its own subtree is still intact to walk.
 * @param item - The subtree to unregister, root item included.
 */
const unregisterItemIds = item => {
  const root = tryGetRoot(item)
  if (!root) {
    return
  }
  itemsById.delete(root, item.id)
  item.children.forEach(exports.unregisterItemIds)
}
exports.unregisterItemIds = unregisterItemIds
/**
 * Resolve an id (as captured off a DomItem's own id) back to the item it refers to, within root's own tree.
 * Throws when the id isn't registered against this root - the same "stale reference" contract getItemByPath
 * already has: a silent wrong-answer resolution is worse than a loud failure.
 * @param root - The tree to resolve the id against.
 * @param id - The id to resolve, as read directly off a DomItem's own id property.
 */
const getItemById = (root, id) => {
  const item = itemsById.get(root, id)
  if (!item) {
    throw new Error(`No item with id ${id} in this tree - it may have been removed, or never belonged to it.`)
  }
  return item
}
exports.getItemById = getItemById
