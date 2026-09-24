import 'core-js/stable'
import activateListener from './activateListener'
import applyActiveListeners from './applyActiveListeners'
import type { DomItem } from '../../domItem/types'

/**
 * Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.
 * @function
 * @memberOf module:domEvents
 * @param {DomItem} item - The DomItem which has eventListeners to apply to its element
 * @returns {DomItem}
 */
const bindElementListeners = (item: DomItem): DomItem => {
  for (const eventName in item.eventListeners) {
    const listeners = item.eventListeners[eventName]
    listeners.forEach(
      (eventAttributes) => {
        if (eventAttributes.listenerActive) {
          return
        }
        item = activateListener(eventName, eventAttributes, item)
        eventAttributes.listenerActive = true
      }
    )
    item = applyActiveListeners(eventName, item)
  }
  return item
}

export default bindElementListeners
