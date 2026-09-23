'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _optionsToNumber = _interopRequireDefault(require('../objects/options/optionsToNumber.js'))
const _siFunciona = _interopRequireDefault(require('si-funciona'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
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
 * @param {module:domEvents~EventListenerOptions} [options=false] - The options the listener was registered with.
 * @param {module:domGeneral~DomItem} item - The DomItem whose eventListeners will be searched.
 * @returns {Array.<(number|EventListener|undefined)>} A 2-element [index, matchingListener] tuple. If no match is
 * found, index is -1 and matchingListener is undefined.
 */
const findEventListener = (eventName, listenerFunction, customArgs, options, item) => {
  customArgs = customArgs ?? null
  options = options ?? false
  if (!_siFunciona.default.isObject(item.eventListeners)) {
    return [-1, undefined]
  }
  if (typeof item.eventListeners[eventName] === 'undefined') {
    return [-1, undefined]
  }
  const findListener = {
    listenerFunc: listenerFunction,
    listenerArgs: _siFunciona.default.describeObject(customArgs),
    listenerOptions: (0, _optionsToNumber.default)(options)
  }
  const listenerIndex = item.eventListeners[eventName].findIndex(eventListener => {
    const argDescriptor = _siFunciona.default.describeObject(eventListener.listenerArgs)
    return eventListener.listenerFunc === findListener.listenerFunc && _siFunciona.default.sameDescriptor(findListener.listenerArgs, argDescriptor) && (0, _optionsToNumber.default)(eventListener.listenerOptions) === findListener.listenerOptions
  })
  return [listenerIndex, item.eventListeners[eventName][listenerIndex]]
}
const _default = exports.default = findEventListener
