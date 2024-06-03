'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _getParentsFromAttribute = _interopRequireDefault(require('./getParentsFromAttribute.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Helper for getting all domObjects.DomItems starting at child and having specified name attribute
 * @function
 * @memberOf module:domFunctions
 * @returns {Array}
 */
const getParentsByName = _siFunciona.default.curry(_getParentsFromAttribute.default)('name')
var _default = exports.default = getParentsByName
