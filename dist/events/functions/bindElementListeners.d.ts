import 'core-js/stable';
import type { DomItem } from '../../domItem/types';
/**
 * Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.
 * @function
 * @memberOf module:domEvents
 * @param {DomItem} item - The DomItem which has eventListeners to apply to its element
 * @returns {DomItem}
 */
declare const bindElementListeners: (item: DomItem) => DomItem;
export default bindElementListeners;
