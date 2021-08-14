import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import bindListeners from './bindListeners'

/**
 * Based on the eventListeners property of the provided item, bind the listeners to the associated element property
 * for each item in the domObjects.DomItem structure.
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem with an associated HTMLElement to have a listener
 * assigned
 * @returns {DomItem}
 */
const bindAllListeners = item => functionalHelpers.setValue(
  'children',
  functionalHelpers.mapObject(item.children, i => bindAllListeners(i)),
  bindListeners(item)
)

export default bindAllListeners
