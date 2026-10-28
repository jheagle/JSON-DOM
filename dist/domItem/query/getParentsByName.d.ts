import type { DomItem } from '../types';
/**
 * Helper for getting all domGeneral.DomItems starting at child and having specified name attribute
 * @param name - The name to search for
 * @param item - The DomItem which may have parent items matching the
 * attribute criteria
 */
declare const getParentsByName: (name: string, item?: DomItem) => DomItem[];
export default getParentsByName;
