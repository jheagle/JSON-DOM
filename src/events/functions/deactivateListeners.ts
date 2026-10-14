import 'core-js/stable'
import type { DomItem } from '../../domItem/types'

/**
 * Set all the listeners for this DOMItem to be inactive.
 * @param item - The DomItem which will have its eventListeners updated.
 */
const deactivateListeners = (item: DomItem): DomItem => {
  for (const eventName in item.eventListeners) {
    item.eventListeners[eventName].forEach((eventListener) => {
      eventListener.listenerActive = false
    })
  }
  delete item.activeListeners
  return item
}

export default deactivateListeners
