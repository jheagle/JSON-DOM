'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
require('core-js/modules/esnext.iterator.map.js')
require('core-js/modules/web.dom-collections.iterator.js')
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _getListenerOptions = _interopRequireDefault(require('../objects/options/getListenerOptions.js'))
var _numberToOptions = _interopRequireDefault(require('../objects/options/numberToOptions.js'))
var _assignListener = _interopRequireDefault(require('./assignListener.js'))
var _createEventProxy = _interopRequireDefault(require('../objects/createEventProxy.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Apply each active event listener for event type to the DOM Item's element.
 * @param {DomItem} item
 * @param {EventName} eventName
 * @return {DomItem}
 */
const applyActiveListeners = (item, eventName) => {
  const listenerOptions = (0, _getListenerOptions.default)()
  const eventOptions = _siFunciona.default.dotGet(item, 'activeListeners.'.concat(eventName))
  if (eventOptions === null) {
    return item
  }
  _siFunciona.default.objectKeys(eventOptions).forEach(binaryOptions => {
    const optionsToUse = (0, _numberToOptions.default)(listenerOptions, parseInt(binaryOptions))
    if (!optionsToUse.signal) {
      // Abort signal must be undefined if it is not required.
      delete optionsToUse.signal
      return (0, _assignListener.default)(eventName, item.element, e => _siFunciona.default.pipe(...item.activeListeners[eventName][binaryOptions].map(eventResponder => eventResponder.handler))((0, _createEventProxy.default)(e)), optionsToUse)
    }
    item.activeListeners[eventName][binaryOptions].forEach(eventResponder => (0, _assignListener.default)(eventName, item.element, e => eventResponder.handler((0, _createEventProxy.default)(e)), Object.assign({}, optionsToUse, {
      signal: eventResponder.abort.signal
    })))
  })
  return item
}
var _default = exports.default = applyActiveListeners
