import 'core-js/stable';
import type { DomItem } from '../domItem/types';
/**
 * Remove all empty properties to reduce total size of the object.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} item - The DomItem with properties to check for empty.
 * @param {Array} propertiesToDelete - Optional array of additional property names to remove.
 * @returns {DomItem}
 */
declare const removeEmptyProperties: (item: DomItem, propertiesToDelete?: string[]) => DomItem;
export default removeEmptyProperties;
