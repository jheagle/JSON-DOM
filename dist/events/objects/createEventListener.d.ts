import 'core-js/stable';
import type { ListenerDescriptor } from '../types';
/**
 * Prepare an eventListener object to attach to a DOMItem
 * @param listenerProperties
 * @param listenerProperties.listenerFunc - The function or name (string) of the listener
 * action - see {@link EventListener}'s listenerFunc property for when to use which.
 * @param listenerProperties.listenerArgs - Additional parameters to apply to the function
 * @param listenerProperties.listenerOptions - The listener options to apply to the element
 * @param listenerProperties.listenerActive - Flag for listener applied to element
 * @returns An EventListener descriptor ready to be pushed onto a DomItem's eventListeners
 */
declare const createEventListener: ({ listenerFunc, listenerArgs, listenerOptions, listenerActive }?: Partial<ListenerDescriptor>) => ListenerDescriptor;
export default createEventListener;
