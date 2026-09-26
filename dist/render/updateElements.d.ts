import 'core-js/stable';
import type { DomItem } from '../domItem/types';
/**
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @param config - The DomItem having child DomItems with config changes to be
 * applied
 */
declare const updateElements: (config: DomItem) => DomItem;
export default updateElements;
