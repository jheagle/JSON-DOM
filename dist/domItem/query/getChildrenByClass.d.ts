import 'core-js/stable';
import type { DomItem } from '../types';
/**
 * Helper for getting all domGeneral.DomItems starting at parent and having specified className attribute
 * @function
 * @memberOf module:domGeneral
 * @param {*} className - The className searched for
 * @param {DomItem} item - The DomItem which may have child items matching the attribute
 * criteria
 * @returns {Array.<DomItem>}
 */
declare const getChildrenByClass: (value: string, item?: DomItem) => DomItem[];
export default getChildrenByClass;
