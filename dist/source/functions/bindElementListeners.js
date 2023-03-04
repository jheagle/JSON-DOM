'use strict'

require('core-js/modules/es.object.define-property.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _assignListener = _interopRequireDefault(require('./assignListener.js'))
var _getTopParentItem = _interopRequireDefault(require('./getTopParentItem.js'))
var _retrieveListener = _interopRequireDefault(require('./retrieveListener.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which has eventListeners to apply to its element
 * @returns {DomItem}
 */
var bindElementListeners = function bindElementListeners (item) {
  var _loop = function _loop () {
    var eventAttributes = item.eventListeners[eventName]
    if (eventAttributes.listenerActive) {
      return 'continue'
    }
    var topParent = (0, _getTopParentItem.default)(item)
    var listenerFunc = (0, _retrieveListener.default)(eventAttributes.listenerFunc, topParent);
    (0, _assignListener.default)(eventName, item.element, function (e) {
      return listenerFunc(e, item, eventAttributes.listenerArgs)
    }, eventAttributes.listenerOptions)
    item.eventListeners[eventName].listenerActive = true
  }
  for (var eventName in item.eventListeners) {
    var _ret = _loop()
    if (_ret === 'continue') continue
  }
  return item
}
var _default = bindElementListeners
exports.default = _default
