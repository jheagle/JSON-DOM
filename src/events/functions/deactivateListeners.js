import 'core-js/stable'

/**
 * Set all the listeners for this DOMItem to be inactive.
 * @function
 * @memberOf module:domEvents
 * @param {DomItem} item - The DomItem which will have its eventListeners updated.
 * @returns {DomItem}
 */
const deactivateListeners = (item) => {
  for (const eventName in item.eventListeners) {
    item.eventListeners[eventName].forEach(eventListener => eventListener.listenerActive = false)
  }
  delete item.activeListeners
  return item
}

export default deactivateListeners
