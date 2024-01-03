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
 * Helper for getting all domObjects.DomItems starting at child and having specified nodeName
 * @function
 * @memberOf module:domFunctions
 * @returns {Array}
 */
const getParentsByTagName = _siFunciona.default.curry(_getParentsFromAttribute.default)('nodeName')
var _default = exports.default = getParentsByTagName
