import 'core-js/stable'
import siFunciona from 'si-funciona'
import getListenerOptions from '../objects/options/getListenerOptions.js'
import numberToOptions from '../objects/options/numberToOptions.js'
import assignListener from './assignListener.js'
import createEventProxy from '../objects/createEventProxy.js'

/**
 * Apply each active event listener for event type to the DOM Item's element.
 * @param {DomItem} item
 * @param {EventName} eventName
 * @return {DomItem}
 */
const applyActiveListeners = (item, eventName) => {
  const listenerOptions = getListenerOptions()
  const eventOptions = siFunciona.dotGet(item, `activeListeners.${eventName}`)
  if (eventOptions === null) {
    return item
  }
  siFunciona.objectKeys(eventOptions).forEach(
    binaryOptions => {
      const optionsToUse = numberToOptions(listenerOptions, parseInt(binaryOptions))
      if (!optionsToUse.signal) {
        // Abort signal must be undefined if it is not required.
        delete optionsToUse.signal
        return assignListener(
          eventName,
          item.element,
          e => siFunciona.pipe(
            ...item.activeListeners[eventName][binaryOptions].map(eventResponder => eventResponder.handler)
          )(createEventProxy(e)),
          optionsToUse
        )
      }
      item.activeListeners[eventName][binaryOptions].forEach(
        eventResponder => assignListener(
          eventName,
          item.element,
          e => eventResponder.handler(createEventProxy(e)),
          Object.assign({}, optionsToUse, { signal: eventResponder.abort.signal })
        )
      )
    }
  )
  return item
}

export default applyActiveListeners
