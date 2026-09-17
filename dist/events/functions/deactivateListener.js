'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _getListenerOptions = _interopRequireDefault(require('../objects/options/getListenerOptions.js'))
var _optionsToNumber = _interopRequireDefault(require('../objects/options/optionsToNumber.js'))
var _numberToOptions = _interopRequireDefault(require('../objects/options/numberToOptions.js'))
var _unassignListener = _interopRequireDefault(require('./unassignListener.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Deactivate a single listener: detach it from the element (if it was actually attached) and remove it from
 * activeListeners, without disturbing any other listener sharing the same options bucket.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName - The name of the trigger event the listener was activated under.
 * @param {EventListener} eventListener - The EventListener descriptor to deactivate, as found via
 * {@link findEventListener} or returned from {@link activateListener}.
 * @param {module:domGeneral~DomItem} item - The DomItem the listener is attached to.
 * @returns {module:domGeneral~DomItem} The same DomItem, with this listener detached and marked inactive.
 */
const deactivateListener = (eventName, eventListener, item) => {
  const eventOptions = _siFunciona.default.dotGet(item, 'activeListeners.'.concat(eventName))
  if (eventOptions === null || !eventListener.activeResponder) {
    return item
  }
  const listenerOptions = (0, _getListenerOptions.default)()
  const optionIdentifier = (0, _optionsToNumber.default)(listenerOptions, eventListener.listenerOptions)
  const bucket = item.activeListeners[eventName][optionIdentifier]
  if (!bucket) {
    return item
  }
  if (eventListener.activeResponder.assignedHandler) {
    const optionsToUse = (0, _numberToOptions.default)(listenerOptions, optionIdentifier)
    const finalOptions = optionsToUse.signal ? Object.assign({}, optionsToUse, {
      signal: eventListener.activeResponder.abort.signal
    }) : (delete optionsToUse.signal, optionsToUse);
    (0, _unassignListener.default)(eventName, item.element, eventListener.activeResponder.assignedHandler, finalOptions)
  }
  const responderIndex = bucket.indexOf(eventListener.activeResponder)
  if (responderIndex > -1) {
    bucket.splice(responderIndex, 1)
  }
  if (bucket.length === 0) {
    delete item.activeListeners[eventName][optionIdentifier]
  }
  eventListener.activeResponder = null
  eventListener.listenerActive = false
  return item
}
var _default = exports.default = deactivateListener
