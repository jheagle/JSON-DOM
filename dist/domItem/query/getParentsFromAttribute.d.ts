import type { DomItem } from '../types';
/**
 * A selector function for retrieving existing child domGeneral.DomItems from the given parent item.
 * This function will check all the children starting from item, and scan the attributes
 * property for matches. The return array contains children matching from all levels.
 * WARNING: This is a recursive function.
 * @param attr - Provide the attribute name to be searched
 * @param value - The attribute value to be compared
 * @param item - The DomItem which may have parent items matching the
 * attribute criteria
 */
declare const getParentsFromAttribute: (attr: string, value: unknown, item?: DomItem) => DomItem[];
export default getParentsFromAttribute;
