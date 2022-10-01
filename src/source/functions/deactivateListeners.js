import 'core-js/stable'

/**
 * Set all the listeners for this DOMItem to be inactive.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which will have its eventListeners updated.
 * @returns {DomItem}
 */
const deactivateListeners = (item) => {
  for (const eventName in item.eventListeners) {
    item.eventListeners[eventName].listenerActive = false
  }
  return item
}

export default deactivateListeners
