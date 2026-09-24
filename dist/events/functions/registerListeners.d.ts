import 'core-js/stable';
import type { DomItemRoot } from '../../domItem/types';
import type { ListenerFunction } from '../types';
/**
 * Register multiple listeners from an array of functions.
 * @function
 * @memberOf module:domEvents
 * @param {Array.<listenerFunction|function>} listeners - An array of functions to be
 * used as the registered event listeners.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which has eventActions property.
 * @returns {DomItemRoot|Object}
 */
declare const registerListeners: (listeners: ListenerFunction[] | Record<string, ListenerFunction>, parent?: DomItemRoot) => DomItemRoot;
export default registerListeners;
