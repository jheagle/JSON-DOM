import 'core-js/stable'
import createEventListener from '../objects/createEventListener'

/**
 * Create an EventListener descriptor and push it onto a DomItem's eventListeners for the given event name.
 * Does not attach anything to the real element - see {@link bindListeners} or {@link fullAddEventListener} for that.
 * @function
 * @memberOf module:domEvents
 * @param {module:domGeneral~DomItem} item - The DomItem which will receive the event listener.
 * @param {EventName} eventName - The name of the trigger event (e.g. 'click').
 * @param {module:domEvents~listenerFunction} listenerFunction - The listener function to be registered.
 * @param {Object|null} [customArgs=null] - Additional args passed through to the listener when called.
 * @param {module:domEvents~EventListenerOptions} [options=false] - Options to be used when the listener is attached
 * to the element.
 * @returns {module:domGeneral~DomItem} The same DomItem, with the new EventListener descriptor appended.
 */
const addEventListener = (item, eventName, listenerFunction, customArgs = null, options = false) => {
  if (typeof item.eventListeners === 'undefined') {
    item.eventListeners = {}
  }
  if (typeof item.eventListeners[eventName] === 'undefined') {
    item.eventListeners[eventName] = []
  }
  // check if the listener already exists and don't add if it does
  item.eventListeners[eventName].push(
    createEventListener({
      listenerFunc: listenerFunction,
      listenerArgs: customArgs,
      listenerOptions: options
    })
  )
  return item
}

export default addEventListener
