import 'core-js/stable'
import documentItem from '../../general/objects/documentItem.js'

/**
 * Based on the provided function / listener name, retrieve the associated function from the root domEvents.DomItem
 * @function
 * @memberOf module:domEvents
 * @param {string} listenerName - The name of one of the registered listener functions.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which stores eventListeners property.
 * @returns {listenerFunction|function|Object}
 */
const retrieveListener = (listenerName, parent = documentItem) => {
  if (!Object.keys(parent.eventActions).includes(listenerName)) {
    throw new Error(`Undefined listener function on this DomItemRoot: ${listenerName}`)
  }
  return parent.eventActions[listenerName]
}

export default retrieveListener
