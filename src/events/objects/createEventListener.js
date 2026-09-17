import 'core-js/stable'

/**
 * This is the standard definition of a listenerFunction to be used
 * @callback listenerFunction
 * @memberOf module:domEvents
 * @param {Event|EventProxy} e - The event object passed to the listener
 * @param {DomItem} target - The element which triggered the event
 * @param {...*} [args] - Optional args as required by the listener
 */

/**
 * A Boolean indicating whether events of this type will be dispatched to the registered listerFunction before being
 * dispatched to any EventTarget beneath it in the Dom tree.
 * @typedef {boolean} UseCapture
 * @memberOf module:domEvents
 */

/**
 * OptionsObject defines the structure for the options to be passed to addEventListener
 * @typedef {Object} OptionsObject
 * @memberOf module:domEvents
 * @property {boolean} capture - Indicate that events of this type will be dispatched to the registered
 * listenerFunction before being dispatched to any EventTarget beneath it in the Dom tree.
 * @property {boolean} once - Indicate that the listenerFunction should be invoked at most once after being added. If
 * 'true', the listenerFunction would be automatically removed when invoked.
 * @property {boolean} passive - Indicate that, if 'true', indicates that the listenerFunction will never call
 * preventDefault(). If preventDefault() is called, the user agent will do nothing with it.
 * @property {boolean} signal - The listener will be removed when the given AbortSignal object's abort() method is
 * called. If not specified, no AbortSignal is associated with the listener.
 */

/**
 * EventListenerOptions is either a boolean as UseCapture or an Object as OptionsObject
 * @typedef {OptionsObject|UseCapture} EventListenerOptions
 * @memberOf module:domEvents
 */

/**
 * An EventListener Object to be appended to the element within the DomItem
 * @typedef {Object} EventListener
 * @memberOf module:domEvents
 * @property {string|listenerFunction} listenerFunc - A string function name matching an existing {@link listenerFunction}.
 * @property {Object} [listenerArgs=null] - Additional args required for the listener function
 * @property {EventListenerOptions} [listenerOptions=false] - Provides support for options parameter of addEventListener, or false for default
 * @property {boolean} [listenerActive=false] - Indicate whether this listener has been applied to the element.
 */

/**
 * One or more listeners assigned to the same event.
 * @typedef {Array.<EventListener>} EventListeners
 * @memberOf module:domEvents
 */

/**
 * The name of the trigger used to fire the event.
 * @typedef {string} EventName
 * @memberOf module:domEvents
 */

/**
 * Prepare an eventListener object to attach to a DOMItem
 * @function
 * @memberOf module:domEvents
 * @param {Object} [listenerProperties={}]
 * @param {string|listenerFunction} listenerProperties.listenerFunc - The function or name (string) of the listener action
 * @param {Object|null} [listenerProperties.listenerArgs=null] - Additional parameters to apply to the function
 * @param {EventListenerOptions} [listenerProperties.listenerOptions=false] - The listener options to apply to the element
 * @param {boolean} [listenerProperties.listenerActive=false] - Flag for listener applied to element
 * @returns {EventListener} An EventListener descriptor ready to be pushed onto a DomItem's eventListeners
 */
const createEventListener = ({
  listenerFunc,
  listenerArgs = null,
  listenerOptions = false,
  listenerActive = false
} = {}) => (
  {
    listenerFunc,
    listenerArgs,
    listenerOptions,
    listenerActive
  }
)

export default createEventListener
