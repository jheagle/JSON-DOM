import 'core-js/stable'
import functionalHelpers from 'functional-helpers'

/**
 * Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which has eventListeners to apply to its element
 * @returns {DomItem}
 */
const bindElementListeners = item => functionalHelpers.setValue(
  'eventListeners',
  functionalHelpers.mapObject(item.eventListeners, (attr, event) => assignListener(
    event,
    item.element,
    e => attr.listenerFunc(e, item, attr.listenerArgs), attr.listenerOptions
  )),
  item
)

export default bindElementListeners
