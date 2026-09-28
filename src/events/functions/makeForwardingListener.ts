import 'core-js/stable'
import getItemPath from '../../domItem/tree/getItemPath'
import type { DomItem } from '../../domItem/types'
import type { EventProxy, ForwardEventsFunction, ListenerFunction } from '../types'

/**
 * Build the listener function used in render-only mode: instead of running real logic locally, it packages the
 * event as a plain envelope (the path to the item it fired on, the event type, the registered listener name and any
 * custom args) and hands it to the injected transport function. See retrieveListener.
 * @param listenerName - The registered name this forwarder stands in for.
 * @param transport - Where the envelope is sent (set on the root item with setForwardEvents).
 */
const makeForwardingListener = (listenerName: string, transport: ForwardEventsFunction): ListenerFunction => (
  event: Event | EventProxy, item: DomItem, ...args: unknown[]
): unknown => transport({
  itemPath: getItemPath((event as EventProxy).domItemTarget ?? item),
  eventType: event.type,
  listenerFunc: listenerName,
  data: args
})

export default makeForwardingListener
