'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _getListenerOptions = _interopRequireDefault(require('../objects/options/getListenerOptions.js'))
var _numberToOptions = _interopRequireDefault(require('../objects/options/numberToOptions.js'))
var _unassignListener = _interopRequireDefault(require('./unassignListener.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Detach every active listener for one event type from a DomItem's element, regardless of which EventListener
 * descriptor each one belongs to, and clear that event's activeListeners bucket. Unlike {@link deactivateListener},
 * this does not update the listenerActive/activeResponder state on the individual descriptors.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName - The name of the trigger event whose active listeners will be revoked.
 * @param {module:domGeneral~DomItem} item - The DomItem to revoke active listeners from.
 * @return {module:domGeneral~DomItem} The same DomItem, with all active listeners for this event detached.
 */
const revokeActiveListeners = (eventName, item) => {
  const listenerOptions = (0, _getListenerOptions.default)()
  const eventOptions = _siFunciona.default.dotGet(item, 'activeListeners.'.concat(eventName))
  if (eventOptions === null) {
    return item
  }
  _siFunciona.default.objectKeys(eventOptions).forEach(binaryOptions => {
    const optionsToUse = (0, _numberToOptions.default)(listenerOptions, parseInt(binaryOptions))
    const usesSignal = !!optionsToUse.signal
    if (!usesSignal) {
      // Abort signal must be undefined if it is not required.
      delete optionsToUse.signal
    }
    item.activeListeners[eventName][binaryOptions].forEach(eventResponder => {
      if (!eventResponder.assignedHandler) {
        // never actually attached to the element, nothing to detach
        return
      }
      const finalOptions = usesSignal ? Object.assign({}, optionsToUse, {
        signal: eventResponder.abort.signal
      }) : optionsToUse;
      (0, _unassignListener.default)(eventName, item.element, eventResponder.assignedHandler, finalOptions)
    })
  })
  delete item.activeListeners[eventName]
  return item
}
var _default = exports.default = revokeActiveListeners
