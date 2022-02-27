'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

var _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which has eventListeners to apply to its element
 * @returns {DomItem}
 */
var bindElementListeners = function bindElementListeners (item) {
  return _functionalHelpers.default.setValue('eventListeners', _functionalHelpers.default.mapObject(item.eventListeners, function (attr, event) {
    return assignListener(event, item.element, function (e) {
      return attr.listenerFunc(e, item, attr.listenerArgs)
    }, attr.listenerOptions)
  }), item)
}

var _default = bindElementListeners
exports.default = _default
