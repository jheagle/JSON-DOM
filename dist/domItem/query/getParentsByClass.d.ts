import 'core-js/stable';
import type { DomItem } from '../types';
/**
 * Helper for getting all domGeneral.DomItems starting at child and having specified className attribute
 * @function
 * @memberOf module:domGeneral
 * @param {*} className - The className to search for
 * @param {DomItem} item - The DomItem which may have parent items matching the
 * attribute criteria
 * @returns {Array}
 */
declare const getParentsByClass: (value: string, item?: DomItem) => DomItem[];
export default getParentsByClass;
