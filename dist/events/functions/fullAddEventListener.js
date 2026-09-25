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
const curry_1 = __importDefault(require('si-funciona/dist/helpers/functions/curry'))
const pipe_1 = __importDefault(require('si-funciona/dist/helpers/functions/pipe'))
const getTopParentItem_1 = __importDefault(require('../../domItem/tree/getTopParentItem'))
const registerListener_1 = __importDefault(require('./registerListener'))
const addEventListener_1 = __importDefault(require('./addEventListener'))
const bindListeners_1 = __importDefault(require('./bindListeners'))
/**
 * Register the listener function, attach it as a descriptor on the item, then bind it onto the
 * real element - the full setup sequence for a single event listener, in order:
 * 1. {@link registerListener} - store the real function in the root DomItem's eventActions, keyed by name.
 * 2. {@link addEventListener} - push an EventListener descriptor referencing that name onto item.eventListeners.
 * 3. {@link bindListeners} - activate and apply any unbound descriptors, attaching them to item.element.
 *
 * item is the last parameter (instead of name/customArgs/options having literal defaults) so addEventListener can
 * be curried directly into the pipe below without an argument-reordering wrapper.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName - The name of the trigger event (e.g. 'click').
 * @param {listenerFunction|function} listener - The function to be called when the event is triggered.
 * @param {string} [name=listener.name] - The name the listener will be registered under in eventActions.
 * @param {Object|null} [customArgs=null] - Additional args passed through to the listener when called.
 * @param {EventListenerOptions} [options=false] - Options to be used when the listener is attached to the element.
 * @param {DomItem} item - The DomItem which will receive the event listener.
 * @returns {DomItem}
 */
const fullAddEventListener = (eventName, listener, name, customArgs, options, item) => {
  const listenerName = name ?? listener.name
  customArgs = customArgs ?? null
  options = options ?? false
  return (0, pipe_1.default)(currentItem => {
    (0, registerListener_1.default)(listener, listenerName, (0, getTopParentItem_1.default)(currentItem))
    return currentItem
  }, (0, curry_1.default)(addEventListener_1.default)(eventName, listenerName, customArgs, options), bindListeners_1.default)(item)
}
exports.default = fullAddEventListener
