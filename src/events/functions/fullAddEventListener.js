import 'core-js/stable'
import curry from 'si-funciona/dist/helpers/functions/curry'
import pipe from 'si-funciona/dist/helpers/functions/pipe'
import getTopParentItem from '../../domItem/tree/getTopParentItem.js'
import registerListener from './registerListener.js'
import addEventListener from './addEventListener.js'
import bindListeners from './bindListeners.js'

/**
 * Register the listener function, attach it as a descriptor on the item, then bind it onto the
 * real element - the full setup sequence for a single event listener, in order:
 * 1. {@link registerListener} - store the real function in the root DomItem's eventActions, keyed by name.
 * 2. {@link addEventListener} - push an EventListener descriptor referencing that name onto item.eventListeners.
 * 3. {@link bindListeners} - activate and apply any unbound descriptors, attaching them to item.element.
 *
 * item is the last parameter (instead of name/customArgs/options having literal defaults) so addEventListener can
 * be curried directly into the pipe below without an argument-reordering wrapper.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName - The name of the trigger event (e.g. 'click').
 * @param {listenerFunction|function} listener - The function to be called when the event is triggered.
 * @param {string} [name=listener.name] - The name the listener will be registered under in eventActions.
 * @param {Object|null} [customArgs=null] - Additional args passed through to the listener when called.
 * @param {EventListenerOptions} [options=false] - Options to be used when the listener is attached to the element.
 * @param {DomItem} item - The DomItem which will receive the event listener.
 * @returns {DomItem}
 */
const fullAddEventListener = (eventName, listener, name, customArgs, options, item) => {
  name = name ?? listener.name
  customArgs = customArgs ?? null
  options = options ?? false
  return pipe(
    currentItem => {
      registerListener(listener, name, getTopParentItem(currentItem))
      return currentItem
    },
    curry(addEventListener)(eventName, name, customArgs, options),
    bindListeners
  )(item)
}

export default fullAddEventListener
