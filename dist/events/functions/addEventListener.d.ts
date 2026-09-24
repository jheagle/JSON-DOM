import 'core-js/stable';
import type { DomItem } from '../../domItem/types';
import type { EventName, ListenerFunction, ListenerOptions } from '../types';
/**
 * Create an EventListener descriptor and push it onto a DomItem's eventListeners for the given event name.
 * Does not attach anything to the real element - see {@link bindListeners} or {@link fullAddEventListener} for that.
 *
 * item is the last parameter (instead of customArgs/options having literal defaults) so this can be curried and
 * piped directly - see {@link fullAddEventListener} for an example.
 *
 * Prefer calling this through {@link fullAddEventListener} with a registered name (see {@link registerListener}).
 * Passing a raw function directly here works, but logs a console warning - see {@link EventListener}'s
 * listenerFunc property for what that discretionary path gives up.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName - The name of the trigger event (e.g. 'click').
 * @param {string|module:domEvents~listenerFunction} listenerFunction - Preferably a name registered via
 * {@link registerListener}; a raw listener function is also accepted, at the caller's discretion.
 * @param {Object|null} [customArgs=null] - Additional args passed through to the listener when called.
 * @param {module:domEvents~EventListenerOptions} [options=false] - Options to be used when the listener is attached
 * to the element.
 * @param {module:domGeneral~DomItem} item - The DomItem which will receive the event listener.
 * @returns {module:domGeneral~DomItem} The same DomItem, with the new EventListener descriptor appended.
 */
declare const addEventListener: (eventName: EventName, listenerFunction: string | ListenerFunction, customArgs: object | null | undefined, options: ListenerOptions | null | undefined, item: DomItem) => DomItem;
export default addEventListener;
