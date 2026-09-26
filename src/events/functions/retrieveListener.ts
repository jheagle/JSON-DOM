import 'core-js/stable'
import documentItem from '../../domItem/objects/documentItem'
import type { DomItemRoot } from '../../domItem/types'
import type { ListenerFunction } from '../types'

/**
 * Based on the provided function / listener name, retrieve the associated function from the root domEvents.DomItem.
 * If a raw function is passed instead of a registered name, it is returned as-is - see {@link EventListener}'s
 * listenerFunc property for the tradeoffs of that discretionary path.
 * @param listenerName - The name of one of the registered listener functions, or an
 * already-resolved listener function.
 * @param parent - The parent DomItem which is DomItemRoot which stores eventListeners property.
 */
const retrieveListener = (listenerName: string | ListenerFunction, parent: DomItemRoot = documentItem): ListenerFunction => {
  if (typeof listenerName === 'function') {
    return listenerName
  }
  if (!Object.keys(parent.eventActions).includes(listenerName)) {
    throw new Error(`Undefined listener function on this DomItemRoot: ${listenerName}`)
  }
  return parent.eventActions[listenerName]
}

export default retrieveListener
