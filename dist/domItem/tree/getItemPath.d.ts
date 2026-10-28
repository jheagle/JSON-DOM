import type { DomItem, ItemPath } from '../types';
/**
 * The path from the root to an item: the index of the item among its parent's children, at each level from the top
 * down. An empty array means the item is the root itself.
 * WARNING: This is a recursive function.
 * @param item - The DomItem to find the path of.
 */
declare const getItemPath: (item: DomItem) => ItemPath;
export default getItemPath;
