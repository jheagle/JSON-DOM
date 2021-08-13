'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

const _documentItem = _interopRequireDefault(require('../objects/documentItem'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Register multiple listeners from an array of functions.
 * @function
 * @memberOf module:domFunctions
 * @param {Array.<module:domObjects~listenerFunction|function>} listeners - An array of functions to be
 * used as the registered event listeners.
 * @param {module:domObjects~DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which
 * stores has eventListeners property.
 * @returns {module:domObjects~DomItemRoot|Object}
 */
const registerListeners = function registerListeners (listeners) {
  const parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _documentItem.default
  return _functionalHelpers.default.setValue('eventListeners', _functionalHelpers.default.mergeObjectsMutable(parent.eventListeners, listeners), parent)
}

const _default = registerListeners
exports.default = _default
