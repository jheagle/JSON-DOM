import 'core-js/stable';
import type { DomItem } from '../domItem/types';
/**
 * Update all the childNodes for this domItem element to mach domItem children.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} domItem
 * @returns {DomItem}
 */
declare const updateChildNodes: (domItem: DomItem) => DomItem;
export default updateChildNodes;
