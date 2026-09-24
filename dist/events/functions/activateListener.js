'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _getTopParentItem = _interopRequireDefault(require('../../domItem/tree/getTopParentItem.js'))
const _makeEventHandler = _interopRequireDefault(require('./makeEventHandler.js'))
const _createEventResponder = _interopRequireDefault(require('../objects/createEventResponder.js'))
const _getListenerOptions = _interopRequireDefault(require('../objects/options/getListenerOptions.js'))
const _optionsToNumber = _interopRequireDefault(require('../objects/options/optionsToNumber.js'))
const _retrieveListener = _interopRequireDefault(require('./retrieveListener.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Activate listener by pushing it to activeListeners.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName
 * @param {EventListener} eventListener
 * @param {DomItem} item
 * @returns {DomItem}
 */
const activateListener = (eventName, eventListener, item) => {
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
  const eventResponder = (0, _createEventResponder.default)(eventHandler, !!(optionIdentifier & listenerOptions.signal))
  item.activeListeners[eventName][optionIdentifier].push(eventResponder)
  eventListener.activeResponder = eventResponder
  return item
}
const _default = exports.default = activateListener
