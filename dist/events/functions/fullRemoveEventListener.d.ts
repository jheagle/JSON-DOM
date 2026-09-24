import 'core-js/stable';
import type { DomItem } from '../../domItem/types';
import type { EventName, ListenerFunction, ListenerOptions } from '../types';
/**
 * Find and remove a listener that was registered by name (e.g. via {@link fullAddEventListener}) - the counterpart
 * to fullAddEventListener. Resolves name the same way fullAddEventListener defaults it, so a caller only needs the
 * original listener function (not the internal name string it was registered under) to remove it:
 * 1. Resolve name (defaults to listener.name, same as {@link fullAddEventListener}).
 * 2. {@link removeEventListener} - find the descriptor by that name, detach it from the element if active, and
 *    splice it out of item.eventListeners.
 *
 * Does not remove the function from the root DomItem's eventActions registry, since that name may still be shared
 * by other DomItems - see {@link registerListener}.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName - The name of the trigger event (e.g. 'click').
 * @param {listenerFunction|function} listener - The same function originally passed to fullAddEventListener.
 * @param {string} [name=listener.name] - The name the listener was registered under in eventActions.
 * @param {Object|null} [customArgs=null] - The custom args the listener was registered with.
 * @param {EventListenerOptions} [options=false] - The options the listener was registered with.
 * @param {DomItem} item - The DomItem to remove the listener from.
 * @returns {DomItem} The same DomItem, with the matching listener removed if one was found.
 */
declare const fullRemoveEventListener: (eventName: EventName, listener: ListenerFunction, name: string | null | undefined, customArgs: object | null | undefined, options: ListenerOptions | null | undefined, item: DomItem) => DomItem;
export default fullRemoveEventListener;
