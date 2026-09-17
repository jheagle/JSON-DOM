'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _curry = _interopRequireDefault(require('si-funciona/dist/helpers/functions/curry'))
var _pipe = _interopRequireDefault(require('si-funciona/dist/helpers/functions/pipe'))
var _getTopParentItem = _interopRequireDefault(require('../../general/functions/getTopParentItem.js'))
var _registerListener = _interopRequireDefault(require('./registerListener.js'))
var _addEventListener = _interopRequireDefault(require('./addEventListener.js'))
var _bindListeners = _interopRequireDefault(require('./bindListeners.js'))
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
  name = name !== null && name !== void 0 ? name : listener.name
  customArgs = customArgs !== null && customArgs !== void 0 ? customArgs : null
  options = options !== null && options !== void 0 ? options : false
  return (0, _pipe.default)(currentItem => {
    (0, _registerListener.default)(listener, name, (0, _getTopParentItem.default)(currentItem))
    return currentItem
  }, (0, _curry.default)(_addEventListener.default)(eventName, name, customArgs, options), _bindListeners.default)(item)
}
var _default = exports.default = fullAddEventListener
