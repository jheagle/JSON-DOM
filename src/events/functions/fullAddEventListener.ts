import 'core-js/stable'
import curry from 'si-funciona/dist/helpers/functions/curry'
import pipe from 'si-funciona/dist/helpers/functions/pipe'
import getTopParentItem from '../../domItem/tree/getTopParentItem'
import registerListener from './registerListener'
import addEventListener from './addEventListener'
import bindListeners from './bindListeners'
import type { DomItem } from '../../domItem/types'
import type { EventName, ListenerFunction, ListenerOptions } from '../types'

/**
 * Register the listener function, attach it as a descriptor on the item, then bind it onto the
 * real element - the full setup sequence for a single event listener, in order:
 * 1. {@link registerListener} - store the real function in the root DomItem's eventActions, keyed by name.
 * 2. {@link addEventListener} - push an EventListener descriptor referencing that name onto item.eventListeners.
 * 3. {@link bindListeners} - activate and apply any unbound descriptors, attaching them to item.element.
 *
 * item is the last parameter (instead of name/customArgs/options having literal defaults) so addEventListener can
 * be curried directly into the pipe below without an argument-reordering wrapper.
 * @param eventName - The name of the trigger event (e.g. 'click').
 * @param listener - The function to be called when the event is triggered.
 * @param name - The name the listener will be registered under in eventActions.
 * @param customArgs - Additional args passed through to the listener when called.
 * @param options - Options to be used when the listener is attached to the element.
 * @param item - The DomItem which will receive the event listener.
 */
const fullAddEventListener = (eventName: EventName, listener: ListenerFunction, name: string | null | undefined, customArgs: object | null | undefined, options: ListenerOptions | null | undefined, item: DomItem): DomItem => {
  const listenerName = name ?? listener.name
  customArgs = customArgs ?? null
  options = options ?? false
  return pipe(
    (currentItem: DomItem) => {
      registerListener(listener, listenerName, getTopParentItem(currentItem))
      return currentItem
    },
    curry(addEventListener)(eventName, listenerName, customArgs, options),
    bindListeners
  )(item) as DomItem
}

export default fullAddEventListener
