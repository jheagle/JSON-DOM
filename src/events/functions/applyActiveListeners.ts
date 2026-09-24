import 'core-js/stable'
import siFunciona from 'si-funciona'
import getListenerOptions from '../objects/options/getListenerOptions'
import numberToOptions from '../objects/options/numberToOptions'
import assignListener from './assignListener'
import createEventProxy from '../objects/createEventProxy'

/**
 * Apply each active event listener for event type to the DOM Item's element.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName
 * @param {DomItem} item
 * @return {DomItem}
 */
const applyActiveListeners = (eventName, item) => {
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
      if (eventResponder.assignedHandler) {
        // already attached to the element
        return
      }
      const finalOptions = usesSignal
        ? Object.assign({}, optionsToUse, { signal: eventResponder.abort.signal })
        : optionsToUse
      eventResponder.assignedHandler = e => eventResponder.handler(createEventProxy(e))
      assignListener(eventName, item.element, eventResponder.assignedHandler, finalOptions)
    })
  })
  return item
}

export default applyActiveListeners
