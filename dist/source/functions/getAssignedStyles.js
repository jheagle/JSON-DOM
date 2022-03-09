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
 * Get all the styles which have been assigned to this element. Assigned styles are indicated as numeric-key
 * properties with a value indicating the string-key property which has been assigned. The string-key properties
 * have the assigned values.
 * @function
 * @memberOf module:domFunctions
 * @param {Object.<style, style>|CSSProperties} elementStyles
 * @returns {object}
 */
var getAssignedStyles = function getAssignedStyles (elementStyles) {
  return _functionalHelpers.default.reduceObject(elementStyles, function (styles, attr, key) {
    return isNaN(key) ? styles : _functionalHelpers.default.setValue(attr, elementStyles[attr], styles)
  }, {})
}

var _default = getAssignedStyles
exports.default = _default
