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
 * When there may be extra data needed for the event listener function call, this function may be used as a helper
 * to pass the additional data. Also, if it is desirable to add event listeners during run-time, this function can be
 * used to achieve this.
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which will have its eventListeners updated.
 * @param {string} event - The string name of the event trigger type to be added.
 * @param {string} listener - The name of the function to be called once the event is triggered.
 * @param {Object} args - Additional arguments to be used in the listener function.
 * @param {EventListenerOptions} options - The strategy used when the event is triggered.
 * @returns {DomItem}
 */
var appendListeners = function appendListeners (item, event, listener) {
  var args = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {}
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false
  return _functionalHelpers.default.setValue('children', _functionalHelpers.default.mapObject(item.children, function (i) {
    return appendListeners(i, event, listener, args, options)
  }), _functionalHelpers.default.setValue('eventListeners', _functionalHelpers.default.setValue(event, {
    listenerFunc: listener,
    listenerArgs: args,
    listenerOptions: options
  }, item.eventListeners), item))
}

var _default = appendListeners
exports.default = _default
