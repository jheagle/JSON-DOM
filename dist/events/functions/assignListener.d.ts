import 'core-js/stable';
import type { EventHandler, ListenerOptions, ListenerTarget } from '../types';
/**
 * Document attachEvent support for older browsers.
 * @typedef {EventTarget} MicrosoftHtmlObject
 * @memberOf module:domEvents
 * @property {Function} attachEvent
 */
/**
 * Provide compatibility for assigning listeners.
 * @function
 * @memberOf module:domEvents
 * @param {string} trigger - The name of the event which will trigger the listenerFunction on the element. (keyof HTMLElementEventMap)
 * @param {EventTarget|MicrosoftHtmlObject} elem - An element to append the listener onto
 * @param {EventListenerOrEventListenerObject|null} fn - The function which will be invoked when the
 * event is triggered
 * @param {EventListenerOptions|boolean} options - Additional options to how the event will be
 * fired
 * @returns {listenerFunction|Function}
 */
declare const assignListener: (trigger: string, elem: ListenerTarget, fn: EventHandler, options?: ListenerOptions) => EventHandler;
export default assignListener;
