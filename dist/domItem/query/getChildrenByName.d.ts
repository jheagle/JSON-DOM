import 'core-js/stable';
import type { DomItem } from '../types';
/**
 * Helper for getting all domGeneral.DomItems starting at parent and having specified name attribute
 * @function
 * @memberOf module:domGeneral
 * @param {*} name - The name searched for
 * @param {DomItem} item - The DomItem which may have child items matching the attribute
 * criteria
 * @returns {Array.<DomItem>}
 */
declare const getChildrenByName: (value: string, item?: DomItem) => DomItem[];
export default getChildrenByName;
