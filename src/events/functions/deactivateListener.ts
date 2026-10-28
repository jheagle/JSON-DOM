import siFunciona from 'si-funciona'
import getListenerOptions from '../objects/options/getListenerOptions'
import optionsToNumber from '../objects/options/optionsToNumber'
import numberToOptions from '../objects/options/numberToOptions'
import unassignListener from './unassignListener'
import type { DomItem } from '../../domItem/types'
import type { EventName, ListenerDescriptor, ListenerTarget } from '../types'

/**
 * Deactivate a single listener: detach it from the element (if it was actually attached) and remove it from
 * activeListeners, without disturbing any other listener sharing the same options bucket.
 * @param eventName - The name of the trigger event the listener was activated under.
 * @param eventListener - The EventListener descriptor to deactivate, as found via
 * {@link findEventListener} or returned from {@link activateListener}.
 * @param item - The DomItem the listener is attached to.
 * @returns The same DomItem, with this listener detached and marked inactive.
 */
const deactivateListener = (eventName: EventName, eventListener: ListenerDescriptor, item: DomItem): DomItem => {
  const eventOptions = siFunciona.dotGet(item, `activeListeners.${eventName}`)
  if (eventOptions === null || !eventListener.activeResponder) {
    return item
  }
  const listenerOptions = getListenerOptions()
  const optionIdentifier = optionsToNumber(listenerOptions, eventListener.listenerOptions)
  const active = item.activeListeners as NonNullable<DomItem['activeListeners']>
  const bucket = active[eventName][optionIdentifier]
  if (!bucket) {
    return item
  }
  if (eventListener.activeResponder.assignedHandler) {
    const optionsToUse = numberToOptions(listenerOptions, optionIdentifier)
    const finalOptions = optionsToUse.signal
      ? Object.assign({}, optionsToUse, { signal: (eventListener.activeResponder.abort as AbortController).signal })
      : (delete optionsToUse.signal, optionsToUse)
    unassignListener(eventName, item.element as unknown as ListenerTarget, eventListener.activeResponder.assignedHandler, finalOptions)
  }
  const responderIndex = bucket.indexOf(eventListener.activeResponder)
  if (responderIndex > -1) {
    bucket.splice(responderIndex, 1)
  }
  if (bucket.length === 0) {
    delete active[eventName][optionIdentifier]
  }
  eventListener.activeResponder = null
  eventListener.listenerActive = false
  return item
}

export default deactivateListener
