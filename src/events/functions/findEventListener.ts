import 'core-js/stable'
import siFunciona from 'si-funciona'
import type { DomItem } from '../../domItem/types'
import type { EventName, ListenerDescriptor, ListenerFunction, ListenerOptions } from '../types'

/**
 * Search a DOM item's eventListeners for a specific event listener, matched by listener function, custom args, and
 * options. Returns its index and the matching descriptor as a tuple.
 *
 * item is the last parameter (instead of customArgs/options having literal defaults) so this can be curried and
 * piped directly - see {@link fullAddEventListener} for an example of the pattern.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName - The name of the trigger event the listener was registered under.
 * @param {module:domEvents~listenerFunction} listenerFunction - The listener function to match against.
 * @param {Object|null} [customArgs=null] - The custom args the listener was registered with.
 * @param {module:domEvents~EventListenerOptions} [options=false] - Accepted for symmetry with addEventListener; a listener
 * is matched on its function and its arguments only, whatever options it was registered with.
 * @param {module:domGeneral~DomItem} item - The DomItem whose eventListeners will be searched.
 * @returns {Array.<(number|EventListener|undefined)>} A 2-element [index, matchingListener] tuple. If no match is
 * found, index is -1 and matchingListener is undefined.
 */
const findEventListener = (eventName: EventName, listenerFunction: string | ListenerFunction, customArgs: object | null | undefined, options: ListenerOptions | null | undefined, item: DomItem): [number, ListenerDescriptor | undefined] => {
  customArgs = customArgs ?? null
  if (!siFunciona.isObject(item.eventListeners)) {
    return [-1, undefined]
  }
  if (typeof item.eventListeners[eventName] === 'undefined') {
    return [-1, undefined]
  }
  const findListener = {
    listenerFunc: listenerFunction,
    listenerArgs: siFunciona.describeObject(customArgs)
  }
  const listenerIndex = item.eventListeners[eventName].findIndex(
    (eventListener: ListenerDescriptor) => {
      const argDescriptor = siFunciona.describeObject(eventListener.listenerArgs)
      return eventListener.listenerFunc === findListener.listenerFunc &&
                siFunciona.sameDescriptor(findListener.listenerArgs, argDescriptor)
    }
  )
  return [listenerIndex, item.eventListeners[eventName][listenerIndex]]
}

export default findEventListener
