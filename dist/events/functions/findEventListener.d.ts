import type { DomItem } from '../../domItem/types';
import type { EventName, ListenerDescriptor, ListenerFunction, ListenerOptions } from '../types';
/**
 * Search a DOM item's eventListeners for a specific event listener, matched by listener function, custom args, and
 * whether it listens in the capture phase. Returns its index and the matching descriptor as a tuple.
 *
 * As with the DOM's removeEventListener, only the capture flag tells two listeners of the same function apart: once,
 * passive and signal only change how a listener behaves, not which listener it is.
 *
 * item is the last parameter (instead of customArgs/options having literal defaults) so this can be curried and
 * piped directly - see {@link fullAddEventListener} for an example of the pattern.
 * @param eventName - The name of the trigger event the listener was registered under.
 * @param listenerFunction - The listener function to match against.
 * @param customArgs - The custom args the listener was registered with.
 * @param options - The options the listener was registered with; only
 * the capture flag is compared.
 * @param item - The DomItem whose eventListeners will be searched.
 * @returns A 2-element [index, matchingListener] tuple. If no match is
 * found, index is -1 and matchingListener is undefined.
 */
declare const findEventListener: (eventName: EventName, listenerFunction: string | ListenerFunction, customArgs: object | null | undefined, options: ListenerOptions | null | undefined, item: DomItem) => [number, ListenerDescriptor | undefined];
export default findEventListener;
