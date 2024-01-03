import 'core-js/stable'
import documentItem from '../objects/documentItem.js'

/**
 * Register a single listener function as part of the root domObjects.DomItem.
 * @function
 * @memberOf module:domFunctions
 * @param {listenerFunction|function} listener - Provide a function which will be called
 * when a Dom event is triggered.
 * @param {string} [name] - The name of the listener to be used.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which stores eventListeners property.
 * @returns {Object.<string, listenerFunction>}
 */
const registerListener = (listener, name = listener.name, parent = documentItem) => Object.assign(
  parent.eventListeners,
  { [name]: listener }
)

export default registerListener
