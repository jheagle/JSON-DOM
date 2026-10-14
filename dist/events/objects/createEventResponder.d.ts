import 'core-js/stable';
import type { EventHandler, EventResponder } from '../types';
/**
 * Store the handler function and associated abort controller instance if available to be used when events are triggered.
 * @param eventHandler - The eventHandler wrapped function to be called for the event.
 * @param abort - Assign an AbortSignal provided or create one (if true), otherwise null.
 */
declare const createEventResponder: (eventHandler: EventHandler, abort?: AbortController | boolean | null) => EventResponder;
export default createEventResponder;
