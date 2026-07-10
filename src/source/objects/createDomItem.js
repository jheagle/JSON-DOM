import 'core-js/stable'
import siFunciona from 'si-funciona'
import appendChild from '../functions/appendChild.js'
import removeChild from '../functions/removeChild'

/**
 * One or more listeners assigned to the same event.
 * @typedef {Array.<EventListener>} EventListeners
 * @memberOf module:domObjects
 */

/**
 * The name of the trigger used to fire the event.
 * @typedef {string} EventName
 * @memberOf module:domObjects
 */

/**
 * DomItem defines the structure for a single element in the Dom
 * @typedef {Object} DomItem
 * @memberOf module:domObjects
 * @property {Object.<EventName, Object.<number, eventHandler>>} activeListeners - Generated property storing assigned
 * listeners.
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * (including the defaulted style object)
 * @property {Array.<DomItem>} children - A reference to an array of child objects
 * @property {(Object|HTMLElement|null)} element - A reference to an existing HTML element will be stored here (default
 * null)
 * @property {Object.<EventName, EventListeners>} eventListeners - An object holding all events to be registered for the
 * associated element
 * @property {Array} jsonExclusions - array of properties to exclude
 * @property {string} nodeName - This is any document node name
 * @property {?string} nodeValue - Is a string of text, null for HTML elements
 * @property {DomItem|Object|null} parentItem - A reference to the parent of this object
 * @property {Function} appendChild - Attach a child to this DOM Item
 * @property {Function} removeChild - Attach a child to this DOM Item
 */

/**
 * This is the basic Object for representing the Dom from a virtual perspective. All incoming attributes will be merged
 * to the specified format.
 * @function
 * @memberOf module:domObjects
 * @param {Object} [item={}] - DomItem-like object to be formatted as DomItem
 * @returns {DomItem}
 */
const createDomItem = (item = {}) => {
  const newDomItem = siFunciona.reduceObject(
    {
      attributes: {},
      children: [],
      element: null,
      eventListeners: {},
      jsonExclusions: [],
      nodeName: 'div',
      nodeValue: null,
      parentItem: null
    },
    (domItem, defaultValue, prop) => {
      if (!(prop in domItem)) {
        domItem[prop] = defaultValue
        return domItem
      }
      return domItem
    },
    item
  )
  newDomItem.appendChild = siFunciona.curry(appendChild)(newDomItem)
  newDomItem.removeChild = siFunciona.curry(removeChild)(newDomItem)
  return newDomItem
}

export default createDomItem
