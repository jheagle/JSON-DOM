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
exports.getItemById = exports.unregisterItemIds = exports.registerItemIds = exports.generateItemId = void 0
require('core-js/stable')
const si_funciona_1 = __importDefault(require('si-funciona'))
const collect_your_stuff_1 = require('collect-your-stuff')
/** One lookup index per json-dom process: every root's own ids live in their own scope, so two unrelated trees
 * (the server's real tree and a client's independently-built one) never collide even though both number their
 * items starting from the same small integers. */
const itemsById = new collect_your_stuff_1.ScopedCollection()
/** The next id to assign - a plain, process-local monotonic counter (not a UUID: cheaper to generate/compare/
 * serialize, and uniqueness only ever needs to hold within one process, since nothing resolves an id against a
 * different root than the one it came from). Exported for createCoreItem's own first stamp and for this
 * module's own collision repair below - kept here, not there, since this module must never import back from
 * createCoreItem (which already imports this one, via removeChild - see unregisterItemIds's own caller). */
let nextItemId = 0
const generateItemId = () => nextItemId++
exports.generateItemId = generateItemId
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
 *
 * Repairs a collision on the way in: an id is supposed to be unique from the moment createCoreItem stamps it,
 * but a generic "build one item, then replicate it N times" helper (si-funciona's buildArray, cloning rather
 * than constructing fresh - the shape matrix-dom's own buildMatrix uses for a grid's rows/columns/tiles) copies
 * whatever id the one template already carries into every copy right along with everything else, with no way
 * for json-dom to know that happened before registration. Catching it here, at the one real choke point every
 * attached item passes through, protects against that pattern (and any other generic cloning this codebase
 * does not yet know about) without needing every consumer to avoid it. A real reuse of someone else's id
 * (rather than two different items both starting from zero) is not realistically distinguishable from this, so
 * the same repair applies regardless of cause - the alternative (leaving the collision in place) silently
 * breaks resolution for one of the two items, which is worse than quietly handing the second one a fresh id.
 * @param item - The subtree to register, root item included.
 */
const registerItemIds = item => {
  const root = tryGetRoot(item)
  if (!root) {
    return
  }
  const alreadyThere = itemsById.get(root, item.id)
  if (alreadyThere && alreadyThere !== item) {
    item.id = (0, exports.generateItemId)()
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
