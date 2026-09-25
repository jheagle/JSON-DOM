import 'core-js/stable';
import type { DomItemRoot } from '../../domItem/types';
import type { ListenerFunction } from '../types';
/**
 * Based on the provided function / listener name, retrieve the associated function from the root domEvents.DomItem.
 * If a raw function is passed instead of a registered name, it is returned as-is - see {@link EventListener}'s
 * listenerFunc property for the tradeoffs of that discretionary path.
 * @function
 * @memberOf module:domEvents
 * @param {string|listenerFunction} listenerName - The name of one of the registered listener functions, or an
 * already-resolved listener function.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which stores eventListeners property.
 * @returns {listenerFunction|function|Object}
 */
declare const retrieveListener: (listenerName: string | ListenerFunction, parent?: DomItemRoot) => ListenerFunction;
export default retrieveListener;
