import 'core-js/stable'
import functionalHelpers from 'functional-helpers'

/**
 * This is the standard definition of a listenerFunction to be used
 * @callback listenerFunction
 * @memberOf module:domObjects
 * @param {Event} e - The event object passed to the listener
 * @param {DomItem} target - The element which triggered the event
 * @param {...*} [args] - Optional args as required by the listener
 */

/**
 * A Boolean indicating whether events of this type will be dispatched to the registered listerFunction before being
 * dispatched to any EventTarget beneath it in the Dom tree.
 * @typedef {boolean} UseCapture
 * @memberOf module:domObjects
 */

/**
 * OptionsObject defines the structure for the options to be passed to addEventListener
 * @typedef {Object} OptionsObject
 * @memberOf module:domObjects
 * @property {boolean} capture - Indicate that events of this type will be dispatched to the registered
 * listenerFunction before being dispatched to any EventTarget beneath it in the Dom tree.
 * @property {boolean} once - Indicate that the listenerFunction should be invoked at most once after being added. If
 * 'true', the listenerFunction would be automatically removed when invoked.
 * @property {boolean} passive - Indicate that, if 'true', indicates that the listenerFunction will never call
 * preventDefault(). If preventDefault() is called, the user agent will do nothing with it.
 */

/**
 * EventListenerOptions is either a boolean as UseCapture or an Object as OptionsObject
 * @typedef {OptionsObject|UseCapture} EventListenerOptions
 * @memberOf module:domObjects
 */

/**
 * An EventListener Object to be appended to the element within the DomItem
 * @typedef {Object} EventListener
 * @memberOf module:domObjects
 * @property {string} listenerFunc - A string function name matching an existing
 * {@link listenerFunction}.
 * @property {Object} listenerArgs - Additional args required for the listener function
 * @property {EventListenerOptions} listenerOptions - Provides support for options
 * parameter of addEventListener, or false for default
 */

/**
 * DomItem defines the structure for a single element in the Dom
 * @typedef {Object} DomItem
 * @memberOf module:domObjects
 * @property {string} tagName - This is any valid HTMLElement tagName
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * (including the defaulted style object)
 * @property {(Object|HTMLElement)} element - A reference to an existing HTML element will be stored here (default
 * empty object)
 * @property {Object.<Event, EventListener>} eventListeners - An object holding all
 * events to be registered for the associated element
 * @property {DomItem} parentItem - A reference to the parent of this object
 * @property {Array.<DomItem>} children - A reference to an array of child objects
 */

/**
 * This is the basic Object for representing the Dom in a virtual perspective. All incoming attributes will be merged
 * to the specified format.
 * @function
 * @memberOf module:domObjects
 * @param {Object} [item={}] - DomItem-like object to be formatted as DomItem
 * @returns {DomItem}
 */
const createDomItem = (item = {}) => functionalHelpers.reduceObject(
  {
    tagName: 'div',
    attributes: {
      style: {}
    },
    element: {},
    eventListeners: {},
    parentItem: {},
    children: []
  },
  (domItem, defaultValue, prop) => {
    if (!(prop in domItem)) {
      domItem[prop] = defaultValue
      return domItem
    }
    if (prop === 'attributes' && !('style' in domItem[prop])) {
      domItem[prop]['style'] = defaultValue['style']
    }
    return domItem
  },
  item
)

export default createDomItem
