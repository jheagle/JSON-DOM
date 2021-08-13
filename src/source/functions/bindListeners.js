import 'core-js/stable'
import bindElementListeners from './bindElementListeners'

/**
 * Based on the eventListeners property of the provided item, bind the
 * listeners to the associated element property for the provided domObjects.DomItem.
 * @function
 * @memberOf module:domFunctions
 * @param {module:domObjects~DomItem} item - The DomItem which may have eventListeners to apply to its
 * element
 * @returns {module:domObjects~DomItem}
 */
const bindListeners = item =>
  (item.eventListeners && Object.keys(item.eventListeners).length && item.element.style)
    ? bindElementListeners(item)
    : item

export default bindListeners
