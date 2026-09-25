import 'core-js/stable';
import type { DomItem } from '../types';
/**
 * A selector function for retrieving existing child domGeneral.DomItems from the given parent item.
 * This function will check all the children starting from item, and scan the attributes
 * property for matches. The returned array contains children matching from all levels.
 * WARNING: This calls a recursive function.
 * @function
 * @memberOf module:domGeneral
 * @param {string} attr - Provide the attribute name to be searched
 * @param {*} value - The attribute value to be compared
 * @param {DomItem} item - The DomItem which may have child items matching the attribute
 * criteria
 * @returns {Array.<DomItem>}
 */
declare const getChildrenFromAttribute: (attr: string, value: unknown, item?: DomItem) => DomItem[];
export default getChildrenFromAttribute;
