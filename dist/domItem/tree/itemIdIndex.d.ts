import type { DomItem, DomItemRoot } from '../types';
export declare const generateItemId: () => number;
/**
 * Register an item (and, recursively, its whole subtree) in its own root's id index, so getItemById can find
 * it. Call once a subtree's relationship to its parent is settled - see renderHtml, which is the one place
 * that happens for a freshly-attached subtree. Does nothing when item is not under a real root yet (or ever).
 *
 * Repairs two ways an item can reach this point without the id createCoreItem is supposed to have already
 * stamped on it, rather than requiring every consumer to avoid either:
 * - No id at all (`typeof item.id !== 'number'`): a raw plain config object merged directly onto an
 *   already-rendered tree (si-funciona's mergeObjectsMutable, by reference, "as is", when the two sides'
 *   shapes do not line up index-for-index - see updatePlayerStats.ts) never passed through createCoreItem at
 *   all, so it has no id (or parentItem, or has map) whatsoever.
 * - A collision (the id is already registered to a *different* item within this same root): a generic "build
 *   one item, then replicate it N times" helper (si-funciona's buildArray, cloning rather than constructing
 *   fresh - the shape matrix-dom's own buildMatrix uses for a grid's rows/columns/tiles) copies whatever id
 *   the one template already carries into every copy right along with everything else, with no way for
 *   json-dom to know that happened before registration.
 *
 * Catching both here, at the one real choke point every attached item passes through, protects against these
 * patterns (and any other generic cloning or raw merging this codebase does not yet know about) without
 * needing every consumer to avoid them. A real reuse of someone else's id (rather than two different items
 * both starting unassigned) is not realistically distinguishable from the collision case, so the same repair
 * applies regardless of cause - the alternative (leaving it in place) silently breaks resolution for one of
 * the two items, which is worse than quietly handing the second one a fresh id.
 * @param item - The subtree to register, root item included.
 */
export declare const registerItemIds: (item: DomItem) => void;
/**
 * Remove an item (and, recursively, its whole subtree) from its own root's id index - the reverse of
 * registerItemIds. Call before the item is actually detached, while its parentItem chain still resolves and
 * its own subtree is still intact to walk.
 * @param item - The subtree to unregister, root item included.
 */
export declare const unregisterItemIds: (item: DomItem) => void;
/**
 * Resolve an id (as captured off a DomItem's own id) back to the item it refers to, within root's own tree.
 * Throws when the id isn't registered against this root - the same "stale reference" contract getItemByPath
 * already has: a silent wrong-answer resolution is worse than a loud failure.
 * @param root - The tree to resolve the id against.
 * @param id - The id to resolve, as read directly off a DomItem's own id property.
 */
export declare const getItemById: (root: DomItemRoot, id: number) => DomItem;
