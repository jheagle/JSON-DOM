import 'core-js/stable'
import siFunciona from 'si-funciona'
import getListenerOptions from '../objects/options/getListenerOptions.js'
import numberToOptions from '../objects/options/numberToOptions.js'
import unassignListener from './unassignListener.js'

/**
 * Remove each active event listener for event type from the DOM Item's element.
 * @function
 * @memberOf module:domEvents
 * @param {DomItem} item
 * @param {EventName} eventName
 * @return {DomItem}
 */
const revokeActiveListeners = (item, eventName) => {
  const listenerOptions = getListenerOptions()
  const eventOptions = siFunciona.dotGet(item, `activeListeners.${eventName}`)
  if (eventOptions === null) {
    return item
  }
  siFunciona.objectKeys(eventOptions).forEach(binaryOptions => {
    const optionsToUse = numberToOptions(listenerOptions, parseInt(binaryOptions))
    const usesSignal = !!optionsToUse.signal
    if (!usesSignal) {
      // Abort signal must be undefined if it is not required.
      delete optionsToUse.signal
    }
    item.activeListeners[eventName][binaryOptions].forEach(eventResponder => {
      if (!eventResponder.assignedHandler) {
        // never actually attached to the element, nothing to detach
        return
      }
      const finalOptions = usesSignal
        ? Object.assign({}, optionsToUse, { signal: eventResponder.abort.signal })
        : optionsToUse
      unassignListener(eventName, item.element, eventResponder.assignedHandler, finalOptions)
    })
  })
  delete item.activeListeners[eventName]
  return item
}

export default revokeActiveListeners
