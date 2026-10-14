import 'core-js/stable';
import type { DomItem } from '../../domItem/types';
import type { EventName, ListenerDescriptor } from '../types';
/**
 * Activate listener by pushing it to activeListeners.
 * @param eventName
 * @param eventListener
 * @param item
 */
declare const activateListener: (eventName: EventName, eventListener: ListenerDescriptor, item: DomItem) => DomItem;
export default activateListener;
