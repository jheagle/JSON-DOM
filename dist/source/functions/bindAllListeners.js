'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

var _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

var _bindListeners = _interopRequireDefault(require('./bindListeners.js'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Based on the eventListeners property of the provided item, bind the listeners to the associated element property
 * for each item in the domObjects.DomItem structure.
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem with an associated HTMLElement to have a listener
 * assigned
 * @returns {DomItem}
 */
var bindAllListeners = function bindAllListeners (item) {
  return _functionalHelpers.default.setValue('children', _functionalHelpers.default.mapObject(item.children, function (i) {
    return bindAllListeners(i)
  }), (0, _bindListeners.default)(item))
}

var _default = bindAllListeners
exports.default = _default
