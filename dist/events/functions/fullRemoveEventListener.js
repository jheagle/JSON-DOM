'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _removeEventListener = _interopRequireDefault(require('./removeEventListener.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Find and remove a listener that was registered by name (e.g. via {@link fullAddEventListener}) - the counterpart
 * to fullAddEventListener. Resolves name the same way fullAddEventListener defaults it, so a caller only needs the
 * original listener function (not the internal name string it was registered under) to remove it:
 * 1. Resolve name (defaults to listener.name, same as {@link fullAddEventListener}).
 * 2. {@link removeEventListener} - find the descriptor by that name, detach it from the element if active, and
 *    splice it out of item.eventListeners.
 *
 * Does not remove the function from the root DomItem's eventActions registry, since that name may still be shared
 * by other DomItems - see {@link registerListener}.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName - The name of the trigger event (e.g. 'click').
 * @param {listenerFunction|function} listener - The same function originally passed to fullAddEventListener.
 * @param {string} [name=listener.name] - The name the listener was registered under in eventActions.
 * @param {Object|null} [customArgs=null] - The custom args the listener was registered with.
 * @param {EventListenerOptions} [options=false] - The options the listener was registered with.
 * @param {DomItem} item - The DomItem to remove the listener from.
 * @returns {DomItem} The same DomItem, with the matching listener removed if one was found.
 */
const fullRemoveEventListener = (eventName, listener, name, customArgs, options, item) => {
  name = name ?? listener.name
  return (0, _removeEventListener.default)(eventName, name, customArgs, options, item)
}
const _default = exports.default = fullRemoveEventListener
