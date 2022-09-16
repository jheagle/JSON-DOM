'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

var _assignListener = _interopRequireDefault(require('./assignListener.js'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which has eventListeners to apply to its element
 * @returns {DomItem}
 */
var bindElementListeners = function bindElementListeners (item) {
  var _loop = function _loop (eventName) {
    var eventAttributes = item.eventListeners[eventName];
    (0, _assignListener.default)(eventName, item.element, function (e) {
      return eventAttributes.listenerFunc(e, item, eventAttributes.listenerArgs)
    }, eventAttributes.listenerOptions)
  }

  for (var eventName in item.eventListeners) {
    _loop(eventName)
  }

  return item
}

var _default = bindElementListeners
exports.default = _default
