import 'core-js/stable'
import findEventListener from './findEventListener.js'
import deactivateListener from './deactivateListener.js'

/**
 * Find and remove an event listener from a DomItem: detaches it from the element first (via
 * {@link deactivateListener}) if it was active, then splices its descriptor out of eventListeners. A no-op if no
 * matching listener is found.
 * @function
 * @memberOf module:domEvents
 * @param {module:domGeneral~DomItem} item - The DomItem to remove the listener from.
 * @param {EventName} eventName - The name of the trigger event the listener was registered under.
 * @param {module:domEvents~listenerFunction} listenerFunction - The listener function to match against.
 * @param {Object|null} [customArgs=null] - The custom args the listener was registered with.
 * @param {module:domEvents~EventListenerOptions} [options=false] - The options the listener was registered with.
 * @returns {module:domGeneral~DomItem} The same DomItem, with the matching listener removed if one was found.
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
