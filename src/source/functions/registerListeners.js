import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import documentItem from '../objects/documentItem'

/**
 * Register multiple listeners from an array of functions.
 * @function
 * @memberOf module:domFunctions
 * @param {Array.<listenerFunction|function>} listeners - An array of functions to be
 * used as the registered event listeners.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which
 * stores has eventListeners property.
 * @returns {DomItemRoot|Object}
 */
const registerListeners = (listeners, parent = documentItem) => functionalHelpers.setValue(
  'eventListeners',
  functionalHelpers.mergeObjectsMutable(parent.eventListeners, listeners),
  parent
)

export default registerListeners
