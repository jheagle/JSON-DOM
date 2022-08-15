'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

var _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

var _updateElement = _interopRequireDefault(require('./updateElement.js'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having child DomItems with config changes to be
 * applied
 * @returns {DomItem}
 */
var updateElements = function updateElements (config) {
  var domItem = (0, _updateElement.default)(config)
  return _functionalHelpers.default.setValue('children', _functionalHelpers.default.mapObject(config.children, function (child) {
    return updateElements(child)
  }), domItem)
}

var _default = updateElements
exports.default = _default
