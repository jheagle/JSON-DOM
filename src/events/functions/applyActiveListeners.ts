import 'core-js/stable'
import siFunciona from 'si-funciona'
import getListenerOptions from '../objects/options/getListenerOptions'
import numberToOptions from '../objects/options/numberToOptions'
import assignListener from './assignListener'
import createEventProxy from '../objects/createEventProxy'
import type { DomItem } from '../../domItem/types'
import type { EventName, EventResponder, ListenerTarget } from '../types'

/**
 * Apply each active event listener for event type to the DOM Item's element.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName
 * @param {DomItem} item
 * @return {DomItem}
 */
const applyActiveListeners = (eventName: EventName, item: DomItem): DomItem => {
  const listenerOptions = getListenerOptions()
  const eventOptions = siFunciona.dotGet(item, `activeListeners.${eventName}`)
  if (eventOptions === null) {
    return item
  }
  siFunciona.objectKeys(eventOptions).forEach((binaryOptions: string) => {
    const optionsToUse = numberToOptions(listenerOptions, parseInt(binaryOptions))
    const usesSignal = !!optionsToUse.signal
    if (!usesSignal) {
      // Abort signal must be undefined if it is not required.
      delete optionsToUse.signal
    }
    ;(item.activeListeners as NonNullable<DomItem['activeListeners']>)[eventName][Number(binaryOptions)].forEach((eventResponder: EventResponder) => {
      if (eventResponder.assignedHandler) {
        // already attached to the element
        return
      }
      const finalOptions = usesSignal
        ? Object.assign({}, optionsToUse, { signal: (eventResponder.abort as AbortController).signal })
        : optionsToUse
      eventResponder.assignedHandler = (e) => eventResponder.handler(createEventProxy(e as Event))
      assignListener(eventName, item.element as unknown as ListenerTarget, eventResponder.assignedHandler, finalOptions)
    })
  })
  return item
}

export default applyActiveListeners
