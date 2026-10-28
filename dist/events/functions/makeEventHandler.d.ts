import type { DomItem } from '../../domItem/types';
import type { EventHandler, ListenerFunction } from '../types';
/**
 * Prepare a listener to be used before assigning to an element.
 * @param listener
 * @param item
 * @param args
 */
declare const makeEventHandler: (listener: ListenerFunction, item: DomItem, ...args: unknown[]) => EventHandler;
export default makeEventHandler;
