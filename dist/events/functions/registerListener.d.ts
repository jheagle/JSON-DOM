import 'core-js/stable';
import type { DomItemRoot } from '../../domItem/types';
import type { ListenerFunction } from '../types';
/**
 * Register a single listener function as part of the root domEvents.DomItem.
 * @param listener - Provide a function which will be called
 * when a Dom event is triggered.
 * @param name - The name of the listener to be used.
 * @param parent - The parent DomItem which is DomItemRoot which stores eventListeners property.
 */
declare const registerListener: (listener: ListenerFunction, name?: string, parent?: DomItemRoot) => Record<string, ListenerFunction>;
export default registerListener;
