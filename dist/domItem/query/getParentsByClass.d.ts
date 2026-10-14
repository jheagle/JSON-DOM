import 'core-js/stable';
import type { DomItem } from '../types';
/**
 * Helper for getting all domGeneral.DomItems going up from item's parent, each one carrying the given class, among
 * possibly several space-separated classes on that item - the same membership check as the real DOM's
 * classList.contains, not an exact match of the whole className attribute string (which getParentsFromAttribute
 * does, and which would miss a parent that also carries other classes).
 * WARNING: This is a recursive function.
 * @param className - The one class being searched for
 * @param item - The DomItem which may have parent items carrying the class
 */
declare const getParentsByClass: (className: string, item?: DomItem) => DomItem[];
export default getParentsByClass;
