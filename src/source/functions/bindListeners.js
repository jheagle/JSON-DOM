import 'core-js/stable'
import bindElementListeners from './bindElementListeners.js'

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
  (item.eventListeners && Object.keys(item.eventListeners).length && item.element)
    ? bindElementListeners(item)
    : item

export default bindListeners
