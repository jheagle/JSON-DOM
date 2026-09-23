'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _curry = _interopRequireDefault(require('si-funciona/dist/helpers/functions/curry'))
const _pipe = _interopRequireDefault(require('si-funciona/dist/helpers/functions/pipe'))
const _getTopParentItem = _interopRequireDefault(require('../../general/functions/getTopParentItem.js'))
const _registerListener = _interopRequireDefault(require('./registerListener.js'))
const _addEventListener = _interopRequireDefault(require('./addEventListener.js'))
const _bindListeners = _interopRequireDefault(require('./bindListeners.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
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
  name = name ?? listener.name
  customArgs = customArgs ?? null
  options = options ?? false
  return (0, _pipe.default)(currentItem => {
    (0, _registerListener.default)(listener, name, (0, _getTopParentItem.default)(currentItem))
    return currentItem
  }, (0, _curry.default)(_addEventListener.default)(eventName, name, customArgs, options), _bindListeners.default)(item)
}
const _default = exports.default = fullAddEventListener
