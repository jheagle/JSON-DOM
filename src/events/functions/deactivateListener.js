import 'core-js/stable'
import siFunciona from 'si-funciona'
import getListenerOptions from '../objects/options/getListenerOptions.js'
import optionsToNumber from '../objects/options/optionsToNumber.js'
import numberToOptions from '../objects/options/numberToOptions.js'
import unassignListener from './unassignListener.js'

/**
 * Deactivate a single listener: detach it from the element (if it was actually attached) and remove it from
 * activeListeners, without disturbing any other listener sharing the same options bucket.
 * @function
 * @memberOf module:domEvents
 * @param {DomItem} item
 * @param {EventName} eventName
 * @param {EventListener} eventListener
 * @returns {DomItem}
 */
const deactivateListener = (item, eventName, eventListener) => {
  const eventOptions = siFunciona.dotGet(item, `activeListeners.${eventName}`)
  if (eventOptions === null || !eventListener.activeResponder) {
    return item
  }
  const listenerOptions = getListenerOptions()
  const optionIdentifier = optionsToNumber(listenerOptions, eventListener.listenerOptions)
  const bucket = item.activeListeners[eventName][optionIdentifier]
  if (!bucket) {
    return item
  }
  if (eventListener.activeResponder.assignedHandler) {
    const optionsToUse = numberToOptions(listenerOptions, optionIdentifier)
    const finalOptions = optionsToUse.signal
      ? Object.assign({}, optionsToUse, { signal: eventListener.activeResponder.abort.signal })
      : (delete optionsToUse.signal, optionsToUse)
    unassignListener(eventName, item.element, eventListener.activeResponder.assignedHandler, finalOptions)
  }
  const responderIndex = bucket.indexOf(eventListener.activeResponder)
  if (responderIndex > -1) {
    bucket.splice(responderIndex, 1)
  }
  if (bucket.length === 0) {
    delete item.activeListeners[eventName][optionIdentifier]
  }
  eventListener.activeResponder = null
  eventListener.listenerActive = false
  return item
}

export default deactivateListener
