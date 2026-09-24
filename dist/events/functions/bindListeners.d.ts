import 'core-js/stable';
import type { DomItem } from '../../domItem/types';
/**
 * Based on the eventListeners property of the provided item, bind the
 * listeners to the associated element property for the provided domEvents.DomItem.
 * @function
 * @memberOf module:domEvents
 * @param {DomItem} item - The DomItem which may have eventListeners to apply to its
 * element
 * @returns {DomItem}
 */
declare const bindListeners: (item: DomItem) => DomItem;
export default bindListeners;
