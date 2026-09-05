'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Get all the styles which have been assigned to this element. Assigned styles are indicated as numeric-key
 * properties with a value indicating the string-key property which has been assigned. The string-key properties
 * have the assigned values.
 * @function
 * @memberOf module:domFunctions
 * @param {Object.<style, style>|CSSProperties} elementStyles
 * @returns {object}
 */
const getAssignedStyles = elementStyles => _siFunciona.default.reduceObject(elementStyles, (styles, attr, key) => isNaN(key) ? styles : _siFunciona.default.setValue(attr, elementStyles[attr], styles), {})
var _default = exports.default = getAssignedStyles
