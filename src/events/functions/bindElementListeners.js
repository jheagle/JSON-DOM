import 'core-js/stable'
import activateListener from './activateListener.js'
import applyActiveListeners from './applyActiveListeners.js'

/**
 * Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which has eventListeners to apply to its element
 * @returns {DomItem}
 */
const bindElementListeners = item => {
  for (const eventName in item.eventListeners) {
    const listeners = item.eventListeners[eventName]
    listeners.forEach(
      eventAttributes => {
        if (eventAttributes.listenerActive) {
          return
        }
        item = activateListener(item, eventName, eventAttributes)
        item.eventListeners[eventName].listenerActive = true
      }
    )
    item = applyActiveListeners(item, eventName)
  }
  return item
}

export default bindElementListeners
