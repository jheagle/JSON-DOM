import 'core-js/stable';
import type { DomItem } from '../domItem/types';
/**
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} config - The DomItem having child DomItems with config changes to be
 * applied
 * @returns {DomItem}
 */
declare const updateDomItems: (config: DomItem) => DomItem;
export default updateDomItems;
