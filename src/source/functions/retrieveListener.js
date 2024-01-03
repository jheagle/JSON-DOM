import 'core-js/stable'
import documentItem from '../objects/documentItem.js'

/**
 * Based on the provided function / listener name, retrieve the associated function from the root domObjects.DomItem
 * @function
 * @memberOf module:domFunctions
 * @param {string} listenerName - The name of one of the registered listener functions.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which stores eventListeners property.
 * @returns {listenerFunction|function|Object}
 */
const retrieveListener = (listenerName, parent = documentItem) => Object.keys(parent.eventListeners).includes(listenerName)
  ? parent.eventListeners[listenerName]
  : throw `Undefined listener function on this DomItemRoot: ${listenerName}`

export default retrieveListener