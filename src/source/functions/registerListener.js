import 'core-js/stable'
import documentItem from '../objects/documentItem'

/**
 * Register a single listener function as part of the root domObjects.DomItem.
 * @function
 * @memberOf module:domFunctions
 * @param {module:domObjects~listenerFunction|function} listener - Provide a function which will be called
 * when a Dom event is triggered.
 * @param {string} [name] - The name of the listener to be used.
 * @param {module:domObjects~DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which
 * stores has eventListeners property.
 * @returns {Object.<string, module:domObjects~listenerFunction>}
 */
const registerListener = (listener, name = listener.name, parent = documentItem) => Object.assign(
  parent.eventListeners,
  { [name]: listener }
)

export default registerListener
