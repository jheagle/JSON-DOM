import 'core-js/stable'
import assignListener from './assignListener.js'
import getTopParentItem from './getTopParentItem.js'
import retrieveListener from './retrieveListener.js'

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
    if (eventAttributes.listenerActive) {
      continue
    }
    const topParent = getTopParentItem(item)
    const listenerFunc =  retrieveListener(eventAttributes.listenerFunc, topParent)
    assignListener(
      eventName,
      item.element,
      e => listenerFunc(e, item, eventAttributes.listenerArgs),
      eventAttributes.listenerOptions
    )
    item.eventListeners[eventName].listenerActive = true
  }
  return item
}

export default bindElementListeners
