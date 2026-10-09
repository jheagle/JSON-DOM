import 'core-js/stable';
import type { DomItem, DomItemRoot } from '../types';
/**
 * Register an item (and, recursively, its whole subtree) in its own root's id index, so getItemById can find
 * it. Call once a subtree's relationship to its parent is settled - see renderHtml, which is the one place
 * that happens for a freshly-attached subtree. Does nothing when item is not under a real root yet (or ever).
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
