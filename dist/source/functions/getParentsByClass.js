'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _getParentsFromAttribute = _interopRequireDefault(require('./getParentsFromAttribute.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Helper for getting all domObjects.DomItems starting at child and having specified className attribute
 * @function
 * @memberOf module:domFunctions
 * @returns {Array}
 */
const getParentsByClass = _siFunciona.default.curry(_getParentsFromAttribute.default)('className')
var _default = getParentsByClass
exports.default = _default
