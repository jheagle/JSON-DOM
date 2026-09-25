import 'core-js/stable';
import type { EventProxy } from '../types';
/**
 * Return a modified version of the event.
 * @param event
 */
declare const createEventProxy: (event: Event) => EventProxy;
export default createEventProxy;
