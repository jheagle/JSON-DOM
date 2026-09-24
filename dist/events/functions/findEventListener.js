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
const si_funciona_1 = __importDefault(require('si-funciona'))
/**
 * Search a DOM item's eventListeners for a specific event listener, matched by listener function, custom args, and
 * options. Returns its index and the matching descriptor as a tuple.
 *
 * item is the last parameter (instead of customArgs/options having literal defaults) so this can be curried and
 * piped directly - see {@link fullAddEventListener} for an example of the pattern.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName - The name of the trigger event the listener was registered under.
 * @param {module:domEvents~listenerFunction} listenerFunction - The listener function to match against.
 * @param {Object|null} [customArgs=null] - The custom args the listener was registered with.
 * @param {module:domEvents~EventListenerOptions} [options=false] - Accepted for symmetry with addEventListener; a listener
 * is matched on its function and its arguments only, whatever options it was registered with.
 * @param {module:domGeneral~DomItem} item - The DomItem whose eventListeners will be searched.
 * @returns {Array.<(number|EventListener|undefined)>} A 2-element [index, matchingListener] tuple. If no match is
 * found, index is -1 and matchingListener is undefined.
 */
const findEventListener = (eventName, listenerFunction, customArgs, options, item) => {
  customArgs = customArgs ?? null
  if (!si_funciona_1.default.isObject(item.eventListeners)) {
    return [-1, undefined]
  }
  if (typeof item.eventListeners[eventName] === 'undefined') {
    return [-1, undefined]
  }
  const findListener = {
    listenerFunc: listenerFunction,
    listenerArgs: si_funciona_1.default.describeObject(customArgs)
  }
  const listenerIndex = item.eventListeners[eventName].findIndex(eventListener => {
    const argDescriptor = si_funciona_1.default.describeObject(eventListener.listenerArgs)
    return eventListener.listenerFunc === findListener.listenerFunc && si_funciona_1.default.sameDescriptor(findListener.listenerArgs, argDescriptor)
  })
  return [listenerIndex, item.eventListeners[eventName][listenerIndex]]
}
exports.default = findEventListener
