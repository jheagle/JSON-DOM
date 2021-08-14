import 'core-js/stable'
import functionalHelpers from 'functional-helpers'

/**
 * When there may be extra data needed for the event listener function call, this function may be used as a helper
 * to pass the additional data. Also, if it is desirable to add event listeners during run-time, this function can be
 * used to achieve this.
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which will have its eventListeners updated.
 * @param {string} event - The string name of the event trigger type to be added.
 * @param {string} listener - The name of the function to be called once the event is triggered.
 * @param {Object} args - Additional arguments to be used in the listener function.
 * @param {EventListenerOptions} options - The strategy used when the event is triggered.
 * @returns {DomItem}
 */
const appendListeners = (item, event, listener, args = {}, options = false) => functionalHelpers.setValue(
  'children',
  functionalHelpers.mapObject(
    item.children,
    i => appendListeners(i, event, listener, args, options)
  ),
  functionalHelpers.setValue(
    'eventListeners',
    functionalHelpers.setValue(
      event,
      {
        listenerFunc: listener,
        listenerArgs: args,
        listenerOptions: options
      },
      item.eventListeners
    ),
    item
  )
)

export default appendListeners
