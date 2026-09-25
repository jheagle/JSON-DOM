import 'core-js/stable';
import type { DomItem } from '../types';
/**
 * For each child of this item, set the parentItem references.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} item - The DomItem to have parent references applied.
 * @returns {DomItem}
 */
declare const setParentItemReferences: (item: DomItem) => DomItem;
export default setParentItemReferences;
