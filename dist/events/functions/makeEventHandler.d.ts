import 'core-js/stable';
import type { DomItem } from '../../domItem/types';
import type { EventHandler, ListenerFunction } from '../types';
/**
 * Based on available flags, either proceed to process the listener or skip.
 * @typedef {Function} eventHandler
 * @memberOf module:domEvents
 * @param {EventProxy} event - The event object passed to the listener
 */
/**
 * Prepare a listener to be used before assigning to an element.
 * @function
 * @memberOf module:domEvents
 * @param {listenerFunction} listener
 * @param {DomItem} item
 * @param {...*} [args]
 * @returns {eventHandler}
 */
declare const makeEventHandler: (listener: ListenerFunction, item: DomItem, ...args: unknown[]) => EventHandler;
export default makeEventHandler;
