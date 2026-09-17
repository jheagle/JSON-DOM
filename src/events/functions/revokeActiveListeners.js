import 'core-js/stable'
import siFunciona from 'si-funciona'
import getListenerOptions from '../objects/options/getListenerOptions.js'
import numberToOptions from '../objects/options/numberToOptions.js'
import unassignListener from './unassignListener.js'

/**
 * Detach every active listener for one event type from a DomItem's element, regardless of which EventListener
 * descriptor each one belongs to, and clear that event's activeListeners bucket. Unlike {@link deactivateListener},
 * this does not update the listenerActive/activeResponder state on the individual descriptors.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName - The name of the trigger event whose active listeners will be revoked.
 * @param {module:domGeneral~DomItem} item - The DomItem to revoke active listeners from.
 * @return {module:domGeneral~DomItem} The same DomItem, with all active listeners for this event detached.
 */
const revokeActiveListeners = (eventName, item) => {
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
