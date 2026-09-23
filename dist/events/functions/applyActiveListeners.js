'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
require('core-js/stable')
const _siFunciona = _interopRequireDefault(require('si-funciona'))
const _getListenerOptions = _interopRequireDefault(require('../objects/options/getListenerOptions.js'))
const _numberToOptions = _interopRequireDefault(require('../objects/options/numberToOptions.js'))
const _assignListener = _interopRequireDefault(require('./assignListener.js'))
const _createEventProxy = _interopRequireDefault(require('../objects/createEventProxy.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Apply each active event listener for event type to the DOM Item's element.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName
 * @param {DomItem} item
 * @return {DomItem}
 */
const applyActiveListeners = (eventName, item) => {
  const listenerOptions = (0, _getListenerOptions.default)()
  const eventOptions = _siFunciona.default.dotGet(item, `activeListeners.${eventName}`)
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
      if (eventResponder.assignedHandler) {
        // already attached to the element
        return
      }
      const finalOptions = usesSignal
        ? Object.assign({}, optionsToUse, {
          signal: eventResponder.abort.signal
        })
        : optionsToUse
      eventResponder.assignedHandler = e => eventResponder.handler((0, _createEventProxy.default)(e));
      (0, _assignListener.default)(eventName, item.element, eventResponder.assignedHandler, finalOptions)
    })
  })
  return item
}
const _default = exports.default = applyActiveListeners
