import 'core-js/stable'
import getItemByElement from '../../domItem/query/getItemByElement'
import type { DomItem } from '../../domItem/types'
import type { EventProxy } from '../types'

/**
 * Return a modified version of the event: adds domItemTarget and currentDomItemTarget, next to the real DOM's own
 * target and currentTarget.
 * @param event
 * @param item - The DomItem the listener is attached to (this event's currentTarget).
 */
const createEventProxy = (event: Event, item: DomItem): EventProxy => new Proxy(
  Object.defineProperties(event, {
    immediatePropagationStopped: {
      enumerable: true,
      value: false,
      writable: true
    },
    currentDomItemTarget: {
      enumerable: true,
      value: item,
      writable: true
    },
    domItemTarget: {
      enumerable: true,
      value: getItemByElement(item, event.target),
      writable: true
    }
  }) as EventProxy,
  {
    get (thisEvent: EventProxy, prop: string | symbol) {
      if (prop === 'stopImmediatePropagation') {
        thisEvent.immediatePropagationStopped = true
      }
      // Read from the event itself rather than the proxy: Event's methods and accessors rely on internal slots
      // (private fields since Node 24), which throw when `this` is the proxy.
      const value = Reflect.get(thisEvent, prop)
      return typeof value === 'function' && prop !== 'constructor' ? value.bind(thisEvent) : value
    }
  }
)

export default createEventProxy
