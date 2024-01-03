import 'core-js/stable'
import bindListeners from './bindListeners.js'

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
const bindAllListeners = item => {
  for (const child of item.children) {
    bindAllListeners(child)
  }
  return bindListeners(item)
}

export default bindAllListeners
