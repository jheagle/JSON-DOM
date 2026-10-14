import 'core-js/stable'
import findEventListener from './findEventListener'
import deactivateListener from './deactivateListener'
import type { DomItem } from '../../domItem/types'
import type { EventName, ListenerFunction, ListenerOptions } from '../types'

/**
 * Find and remove an event listener from a DomItem: detaches it from the element first (via
 * {@link deactivateListener}) if it was active, then splices its descriptor out of eventListeners. A no-op if no
 * matching listener is found.
 *
 * item is the last parameter (instead of customArgs/options having literal defaults) so this can be curried and
 * piped directly - see {@link fullAddEventListener} for an example of the pattern.
 * @param eventName - The name of the trigger event the listener was registered under.
 * @param listenerFunction - The listener function to match against.
 * @param customArgs - The custom args the listener was registered with.
 * @param options - The options the listener was registered with.
 * @param item - The DomItem to remove the listener from.
 * @returns The same DomItem, with the matching listener removed if one was found.
 */
const removeEventListener = (eventName: EventName, listenerFunction: string | ListenerFunction, customArgs: object | null | undefined, options: ListenerOptions | null | undefined, item: DomItem): DomItem => {
  const [listenerIndex, foundListener] = findEventListener(eventName, listenerFunction, customArgs, options, item)
  if (listenerIndex < 0 || typeof foundListener === 'undefined') {
    // listener not found
    return item
  }
  if (foundListener.listenerActive === true) {
    item = deactivateListener(eventName, foundListener, item)
  }
  item.eventListeners[eventName].splice(listenerIndex, 1)
  return item
}

export default removeEventListener
