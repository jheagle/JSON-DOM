import 'core-js/stable';
import type { CoreItem } from '../domItem/types';
/**
 * Remove all empty properties to reduce total size of the object.
 * @param item - The DomItem with properties to check for empty.
 * @param propertiesToDelete - Optional array of additional property names to remove.
 */
declare const removeEmptyProperties: (item: CoreItem, propertiesToDelete?: string[]) => CoreItem;
export default removeEmptyProperties;
