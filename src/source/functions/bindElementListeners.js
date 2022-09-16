import 'core-js/stable'
import assignListener from './assignListener.js'

/**
 * Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which has eventListeners to apply to its element
 * @returns {DomItem}
 */
const bindElementListeners = item => {
  for (const eventName in item.eventListeners) {
    const eventAttributes = item.eventListeners[eventName]
    assignListener(
      eventName,
      item.element,
      e => eventAttributes.listenerFunc(e, item, eventAttributes.listenerArgs),
      eventAttributes.listenerOptions
    )
  }
  return item
}

export default bindElementListeners
