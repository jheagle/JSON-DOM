import 'core-js/stable';
import type { DomItem } from '../domItem/types';
/**
 * Convert DOM Item to JSON string.
 * @function
 * @memberOf module:domGeneral
 * @param {string} jsonString
 * @returns {DomItem}
 */
declare const jsonToDomItem: (jsonString: string) => DomItem;
export default jsonToDomItem;
