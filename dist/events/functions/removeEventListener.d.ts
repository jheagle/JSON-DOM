import 'core-js/stable';
import type { DomItem } from '../../domItem/types';
import type { EventName, ListenerFunction, ListenerOptions } from '../types';
/**
 * Find and remove an event listener from a DomItem: detaches it from the element first (via
 * {@link deactivateListener}) if it was active, then splices its descriptor out of eventListeners. A no-op if no
 * matching listener is found.
 *
 * item is the last parameter (instead of customArgs/options having literal defaults) so this can be curried and
 * piped directly - see {@link fullAddEventListener} for an example of the pattern.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName - The name of the trigger event the listener was registered under.
 * @param {module:domEvents~listenerFunction} listenerFunction - The listener function to match against.
 * @param {Object|null} [customArgs=null] - The custom args the listener was registered with.
 * @param {module:domEvents~EventListenerOptions} [options=false] - The options the listener was registered with.
 * @param {module:domGeneral~DomItem} item - The DomItem to remove the listener from.
 * @returns {module:domGeneral~DomItem} The same DomItem, with the matching listener removed if one was found.
 */
declare const removeEventListener: (eventName: EventName, listenerFunction: string | ListenerFunction, customArgs: object | null | undefined, options: ListenerOptions | null | undefined, item: DomItem) => DomItem;
export default removeEventListener;
