import 'core-js/stable'
import bindElementListeners from './bindElementListeners.js'
import siFunciona from 'si-funciona'

/**
 * Based on the eventListeners property of the provided item, bind the
 * listeners to the associated element property for the provided domEvents.DomItem.
 * @function
 * @memberOf module:domEvents
 * @param {DomItem} item - The DomItem which may have eventListeners to apply to its
 * element
 * @returns {DomItem}
 */
const bindListeners = item =>
  (!siFunciona.emptyObject(item.eventListeners) && item.element)
    ? bindElementListeners(item)
    : item

export default bindListeners
