import 'core-js/stable';
import type { DomItem } from '../types';
/**
 * Reverse of appendHtml, remove a DomItem and have the associated element removed.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} parent - The parent of the items
 * @param {DomItem} child - The DomItem with HTMLElement to be removed
 * @returns {Array.<DomItem>}
 */
declare const removeChild: (parent: DomItem, child: DomItem) => DomItem[];
export default removeChild;
