import 'core-js/stable';
import type { DomItem, ItemPath } from '../types';
/**
 * Resolve a path (as built by getItemPath) back to the item it points at, starting from the root. Throws when the
 * path no longer matches the tree's current shape - exactly like a stale reference to a real DOM element would, a
 * path is only valid for as long as the tree it was built from keeps the same shape.
 * @param root - The item the path is relative to (usually documentItem).
 * @param path - The path to resolve, as returned by getItemPath.
 */
declare const getItemByPath: (root: DomItem, path: ItemPath) => DomItem;
export default getItemByPath;
