import 'core-js/stable';
import type { DomItem } from '../../domItem/types';
/**
 * Based on the eventListeners property of the provided item, bind the listeners to the associated element property
 * for each item in the domEvents.DomItem structure.
 * WARNING: This is a recursive function.
 * @param item - The DomItem with an associated HTMLElement to have a listener
 * assigned
 */
declare const bindAllListeners: (item: DomItem) => DomItem;
export default bindAllListeners;
