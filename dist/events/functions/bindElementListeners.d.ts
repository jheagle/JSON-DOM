import type { DomItem } from '../../domItem/types';
/**
 * Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.
 * @param item - The DomItem which has eventListeners to apply to its element
 */
declare const bindElementListeners: (item: DomItem) => DomItem;
export default bindElementListeners;
