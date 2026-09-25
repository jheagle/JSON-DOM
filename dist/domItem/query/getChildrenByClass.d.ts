import 'core-js/stable';
import type { DomItem } from '../types';
/**
 * Helper for getting all domGeneral.DomItems starting at parent and having specified className attribute
 * @param className - The className searched for
 * @param item - The DomItem which may have child items matching the attribute
 * criteria
 */
declare const getChildrenByClass: (className: string, item?: DomItem) => DomItem[];
export default getChildrenByClass;
