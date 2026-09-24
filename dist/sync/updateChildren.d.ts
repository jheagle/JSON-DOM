import 'core-js/stable';
import type { DomItem } from '../domItem/types';
/**
 * Update all the children for this domItem to match the domItem element childNodes.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} domItem
 * @returns {DomItem}
 */
declare const updateChildren: (domItem: DomItem) => DomItem;
export default updateChildren;
