import 'core-js/stable'
import bindListeners from './bindListeners'
import type { DomItem } from '../../domItem/types'

/**
 * Based on the eventListeners property of the provided item, bind the listeners to the associated element property
 * for each item in the domEvents.DomItem structure.
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domEvents
 * @param {DomItem} item - The DomItem with an associated HTMLElement to have a listener
 * assigned
 * @returns {DomItem}
 */
const bindAllListeners = (item: DomItem): DomItem => {
  for (const child of item.children) {
    bindAllListeners(child)
  }
  return bindListeners(item)
}

export default bindAllListeners
