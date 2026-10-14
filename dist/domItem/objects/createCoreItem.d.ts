import 'core-js/stable';
import type { CoreItem, DomItemConfig } from '../types';
/**
 * Create the generic item, without the render trait. Every property which is not given gets its default. The given
 * object is completed and returned (it is not copied). Children which are plain objects are completed the same way, all
 * the way down; a child which already has a has map is taken to be complete and is left alone.
 * @param item - Item-like object to be formatted as a CoreItem
 */
declare const createCoreItem: (item?: DomItemConfig) => CoreItem;
export default createCoreItem;
