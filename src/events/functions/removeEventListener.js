import 'core-js/stable'
import findEventListener from './findEventListener.js'
import deactivateListener from './deactivateListener.js'

/**
 * Remove an event listener from a dom item.
 * @function
 * @memberOf module:domEvents
 * @param {module:domGeneral~DomItem} item
 * @param {EventName} eventName
 * @param {module:domEvents~listenerFunction} listenerFunction
 * @param {Object|null} customArgs
 * @param {module:domEvents~EventListenerOptions} options
 * @returns {Array.<int|null, EventListener|null>}
 */
const removeEventListener = (item, eventName, listenerFunction, customArgs = null, options = false) => {
  const [listenerIndex, foundListener] = findEventListener(item, eventName, listenerFunction, customArgs, options)
  if (listenerIndex < 0 || typeof foundListener === 'undefined') {
    // listener not found
    return item
  }
  if (foundListener.listenerActive === true) {
    item = deactivateListener(item, eventName, foundListener)
  }
  item.eventListeners[eventName].splice(listenerIndex, 1)
  return item
}

export default removeEventListener
