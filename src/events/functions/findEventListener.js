import 'core-js/stable'
import optionsToNumber from '../objects/options/optionsToNumber.js'
import siFunciona from 'si-funciona'

/**
 * Search a DOM item's eventListeners fro a specific event listener, returns index and item in an array
 * @function
 * @memberOf module:domEvents
 * @param {module:domGeneral~DomItem} item
 * @param {EventName} eventName
 * @param {module:domEvents~listenerFunction} listenerFunction
 * @param {Object|null} customArgs
 * @param {module:domEvents~EventListenerOptions} options
 * @returns {Array.<int|null, EventListener|null>}
 */
const findEventListener = (item, eventName, listenerFunction, customArgs = null, options = false) => {
  if (!siFunciona.isObject(item.eventListeners)) {
    return [-1, undefined]
  }
  if (typeof item.eventListeners[eventName] === 'undefined') {
    return [-1, undefined]
  }
  const findListener = {
    listenerFunc: listenerFunction,
    listenerArgs: siFunciona.describeObject(customArgs),
    listenerOptions: optionsToNumber(options)
  }
  const listenerIndex = item.eventListeners[eventName].findIndex(
    eventListener => {
      const argDescriptor = siFunciona.describeObject(eventListener.listenerArgs)
      return eventListener.listenerFunc === findListener.listenerFunc &&
                siFunciona.sameDescriptor(findListener.listenerArgs, argDescriptor) &&
                optionsToNumber(eventListener.listenerOptions) === findListener.listenerOptions
    }
  )
  return [listenerIndex, item.eventListeners[eventName][listenerIndex]]
}

export default findEventListener
