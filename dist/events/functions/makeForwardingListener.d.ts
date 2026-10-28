import type { ForwardEventsFunction, ListenerFunction } from '../types';
/**
 * Build the listener function used in render-only mode: instead of running real logic locally, it packages the
 * event as a plain envelope (the id of the item it fired on, the event type, the registered listener name, any
 * custom args, and any live target state - see captureTargetState) and hands it to the injected transport
 * function. See retrieveListener.
 * @param listenerName - The registered name this forwarder stands in for.
 * @param transport - Where the envelope is sent (set on the root item with setForwardEvents).
 */
declare const makeForwardingListener: (listenerName: string, transport: ForwardEventsFunction) => ListenerFunction;
export default makeForwardingListener;
