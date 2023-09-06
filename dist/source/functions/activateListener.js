'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _getTopParentItem = _interopRequireDefault(require('./getTopParentItem.js'))
var _makeEventHandler = _interopRequireDefault(require('./makeEventHandler.js'))
var _createEventResponder = _interopRequireDefault(require('../objects/createEventResponder.js'))
var _getListenerOptions = _interopRequireDefault(require('../objects/options/getListenerOptions.js'))
var _optionsToNumber = _interopRequireDefault(require('../objects/options/optionsToNumber.js'))
var _retrieveListener = _interopRequireDefault(require('./retrieveListener.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Activate listener by pushing it to activeListeners.
 * @param {DomItem} item
 * @param {EventName} eventName
 * @param {EventListener} eventListener
 * @returns {DomItem}
 */
const activateListener = (item, eventName, eventListener) => {
  const listenerOptions = (0, _getListenerOptions.default)()
  if (typeof item.activeListeners === 'undefined') {
    item.activeListeners = {}
  }
  if (!(eventName in item.activeListeners)) {
    item.activeListeners[eventName] = {}
  }
  const optionIdentifier = (0, _optionsToNumber.default)(listenerOptions, eventListener.listenerOptions)
  if (!(optionIdentifier in item.activeListeners[eventName])) {
    item.activeListeners[eventName][optionIdentifier] = []
  }
  const listenerFunc = (0, _retrieveListener.default)(eventListener.listenerFunc, (0, _getTopParentItem.default)(item))
  const eventHandler = (0, _makeEventHandler.default)(listenerFunc, item, eventListener.listenerArgs)
  item.activeListeners[eventName][optionIdentifier].push((0, _createEventResponder.default)(eventHandler, !!(optionIdentifier & listenerOptions.signal)))
  return item
}
var _default = activateListener
exports.default = _default
