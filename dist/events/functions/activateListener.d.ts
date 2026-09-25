import 'core-js/stable';
import type { DomItem } from '../../domItem/types';
import type { EventName, ListenerDescriptor } from '../types';
/**
 * Activate listener by pushing it to activeListeners.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName
 * @param {EventListener} eventListener
 * @param {DomItem} item
 * @returns {DomItem}
 */
declare const activateListener: (eventName: EventName, eventListener: ListenerDescriptor, item: DomItem) => DomItem;
export default activateListener;
