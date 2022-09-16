import 'core-js/stable'
import bindElementListeners from './bindElementListeners.js'
import functionalHelpers from 'functional-helpers'

/**
 * Based on the eventListeners property of the provided item, bind the
 * listeners to the associated element property for the provided domObjects.DomItem.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which may have eventListeners to apply to its
 * element
 * @returns {DomItem}
 */
const bindListeners = item =>
  (!functionalHelpers.emptyObject(item.eventListeners) && item.element)
    ? bindElementListeners(item)
    : item

export default bindListeners
