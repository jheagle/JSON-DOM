import 'core-js/stable';
import type { DomItem } from '../types';
/**
 * Helper for getting all domGeneral.DomItems starting at child and having specified className attribute
 * @param className - The className to search for
 * @param item - The DomItem which may have parent items matching the
 * attribute criteria
 */
declare const getParentsByClass: (className: string, item?: DomItem) => DomItem[];
export default getParentsByClass;
