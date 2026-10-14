import 'core-js/stable';
import type { DomItem } from '../../domItem/types';
import type { EventProxy } from '../types';
/**
 * Return a modified version of the event: adds domItemTarget and currentDomItemTarget, next to the real DOM's own
 * target and currentTarget.
 * @param event
 * @param item - The DomItem the listener is attached to (this event's currentTarget).
 */
declare const createEventProxy: (event: Event, item: DomItem) => EventProxy;
export default createEventProxy;
