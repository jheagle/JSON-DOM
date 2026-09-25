import 'core-js/stable';
import type { CoreItem } from '../types';
/**
 * The properties an item has only because of its traits, and which do not belong in json (the element of the render
 * trait, for one).
 * @param {CoreItem} item - The item to look at.
 * @returns {Array<string>}
 */
declare const getNonSerializableKeys: (item: CoreItem) => string[];
export default getNonSerializableKeys;
