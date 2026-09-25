import 'core-js/stable';
import type { EventProxy } from '../types';
/**
 * A wrapped Event which provides additional utilities.
 * @typedef {Event} EventProxy
 * @memberOf module:domEvents
 * @property {boolean} immediatePropagationStopped
 */
/**
 * Return a modified version of the event.
 * @function
 * @memberOf module:domEvents
 * @param {Event} event
 * @returns {EventProxy}
 */
declare const createEventProxy: (event: Event) => EventProxy;
export default createEventProxy;
