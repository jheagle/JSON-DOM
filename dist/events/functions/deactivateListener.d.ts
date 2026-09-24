import 'core-js/stable';
import type { DomItem } from '../../domItem/types';
import type { EventName, ListenerDescriptor } from '../types';
/**
 * Deactivate a single listener: detach it from the element (if it was actually attached) and remove it from
 * activeListeners, without disturbing any other listener sharing the same options bucket.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName - The name of the trigger event the listener was activated under.
 * @param {EventListener} eventListener - The EventListener descriptor to deactivate, as found via
 * {@link findEventListener} or returned from {@link activateListener}.
 * @param {module:domGeneral~DomItem} item - The DomItem the listener is attached to.
 * @returns {module:domGeneral~DomItem} The same DomItem, with this listener detached and marked inactive.
 */
declare const deactivateListener: (eventName: EventName, eventListener: ListenerDescriptor, item: DomItem) => DomItem;
export default deactivateListener;
