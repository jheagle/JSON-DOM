import 'core-js/stable';
import type { DomItem, DomItemRoot } from '../types';
/**
 * Get the upper parentItem for the provided child. (usually this is a documentItem reference)
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} item - The DomItem which we want the highest parent item of
 * @returns {DomItemRoot}
 */
declare const getTopParentItem: (item: DomItem) => DomItemRoot;
export default getTopParentItem;
