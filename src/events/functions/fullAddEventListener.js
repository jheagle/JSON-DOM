import 'core-js/stable'
import curry from 'si-funciona/dist/helpers/functions/curry'
import pipe from 'si-funciona/dist/helpers/functions/pipe'
import getTopParentItem from '../../general/functions/getTopParentItem.js'
import registerListener from './registerListener.js'
import addEventListener from './addEventListener.js'
import bindListeners from './bindListeners.js'

/**
 * Register the listener function, attach it as a descriptor on the item, then bind it onto the
 * real element - the full setup sequence for a single event listener, in order:
 * 1. {@link registerListener} - store the real function in the root DomItem's eventActions, keyed by name.
 * 2. {@link addEventListener} - push an EventListener descriptor referencing that name onto item.eventListeners.
 * 3. {@link bindListeners} - activate and apply any unbound descriptors, attaching them to item.element.
 * @function
 * @memberOf module:domEvents
 * @param {DomItem} item - The DomItem which will receive the event listener.
 * @param {EventName} eventName - The name of the trigger event (e.g. 'click').
 * @param {listenerFunction|function} listener - The function to be called when the event is triggered.
 * @param {string} [name=listener.name] - The name the listener will be registered under in eventActions.
 * @param {Object|null} [customArgs=null] - Additional args passed through to the listener when called.
 * @param {EventListenerOptions} [options=false] - Options to be used when the listener is attached to the element.
 * @returns {DomItem}
 */
const fullAddEventListener = (item, eventName, listener, name = listener.name, customArgs = null, options = false) => pipe(
  curry((eventName, listener, name, item) => {
    registerListener(listener, name, getTopParentItem(item))
    return item
  })(eventName, listener, name),
  curry((eventName, name, customArgs, options, item) => addEventListener(item, eventName, name, customArgs, options))(eventName, name, customArgs, options),
  bindListeners
)(item)

export default fullAddEventListener
