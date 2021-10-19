'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which has eventListeners to apply to its element
 * @returns {DomItem}
 */
const bindElementListeners = function bindElementListeners (item) {
  return _functionalHelpers.default.setValue('eventListeners', _functionalHelpers.default.mapObject(item.eventListeners, function (attr, event) {
    return assignListener(event, item.element, function (e) {
      return attr.listenerFunc(e, item, attr.listenerArgs)
    }, attr.listenerOptions)
  }), item)
}

const _default = bindElementListeners
exports.default = _default
