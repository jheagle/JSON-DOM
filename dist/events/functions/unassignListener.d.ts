import type { EventHandler, ListenerOptions, ListenerTarget } from '../types';
/**
 * Provide compatibility for unassigning listeners.
 * @param trigger - The name of the event which will trigger the listenerFunction on the element. (keyof HTMLElementEventMap)
 * @param elem - An element to append the listener onto
 * @param fn - The function which will be invoked when the
 * event is triggered
 * @param options - Additional options to how the event will be
 * fired
 */
declare const unassignListener: (trigger: string, elem: ListenerTarget, fn: EventHandler, options?: ListenerOptions) => EventHandler;
export default unassignListener;
