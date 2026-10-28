import type { DomItem } from '../../domItem/types'
import type { EventHandler, EventProxy, ListenerFunction } from '../types'

/**
 * Prepare a listener to be used before assigning to an element.
 * @param listener
 * @param item
 * @param args
 */
const makeEventHandler = (listener: ListenerFunction, item: DomItem, ...args: unknown[]): EventHandler => {
  return (event) => {
    if (!event || (event as EventProxy).immediatePropagationStopped) {
      return event
    }
    return listener(event, item, ...args)
  }
}

export default makeEventHandler
