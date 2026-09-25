import 'core-js/stable';
import type { DomItem } from '../types';
/**
 * Helper for getting all domGeneral.DomItems starting at child and having specified nodeName
 * @function
 * @memberOf module:domGeneral
 * @param {*} nodeName - The nodeName to search for
 * @param {DomItem} item - The DomItem which may have parent items matching the
 * attribute criteria
 * @returns {Array}
 */
declare const getParentsByTagName: (value: string, item?: DomItem) => DomItem[];
export default getParentsByTagName;
