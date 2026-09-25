'use strict'

const __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule
    ? mod
    : {
        default: mod
      }
}
Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
const findEventListener_1 = __importDefault(require('./findEventListener'))
const deactivateListener_1 = __importDefault(require('./deactivateListener'))
/**
 * Find and remove an event listener from a DomItem: detaches it from the element first (via
 * {@link deactivateListener}) if it was active, then splices its descriptor out of eventListeners. A no-op if no
 * matching listener is found.
 *
 * item is the last parameter (instead of customArgs/options having literal defaults) so this can be curried and
 * piped directly - see {@link fullAddEventListener} for an example of the pattern.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName - The name of the trigger event the listener was registered under.
 * @param {module:domEvents~listenerFunction} listenerFunction - The listener function to match against.
 * @param {Object|null} [customArgs=null] - The custom args the listener was registered with.
 * @param {module:domEvents~EventListenerOptions} [options=false] - The options the listener was registered with.
 * @param {module:domGeneral~DomItem} item - The DomItem to remove the listener from.
 * @returns {module:domGeneral~DomItem} The same DomItem, with the matching listener removed if one was found.
 */
const removeEventListener = (eventName, listenerFunction, customArgs, options, item) => {
  const [listenerIndex, foundListener] = (0, findEventListener_1.default)(eventName, listenerFunction, customArgs, options, item)
  if (listenerIndex < 0 || typeof foundListener === 'undefined') {
    // listener not found
    return item
  }
  if (foundListener.listenerActive === true) {
    item = (0, deactivateListener_1.default)(eventName, foundListener, item)
  }
  item.eventListeners[eventName].splice(listenerIndex, 1)
  return item
}
exports.default = removeEventListener
