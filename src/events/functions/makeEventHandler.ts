import 'core-js/stable'
import type { DomItem } from '../../domItem/types'
import type { EventHandler, EventProxy, ListenerFunction } from '../types'

/**
 * Based on available flags, either proceed to process the listener or skip.
 * @typedef {Function} eventHandler
 * @memberOf module:domEvents
 * @param {EventProxy} event - The event object passed to the listener
 */

/**
 * Prepare a listener to be used before assigning to an element.
 * @function
 * @memberOf module:domEvents
 * @param {listenerFunction} listener
 * @param {DomItem} item
 * @param {...*} [args]
 * @returns {eventHandler}
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
