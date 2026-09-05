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
 * Helper for getting all domObjects.DomItems starting at child and having specified nodeName
 * @function
 * @memberOf module:domFunctions
 * @param {*} nodeName - The nodeName to search for
 * @param {DomItem} item - The DomItem which may have parent items matching the
 * attribute criteria
 * @returns {Array}
 */
const getParentsByTagName = _siFunciona.default.curry(_getParentsFromAttribute.default)('nodeName')
var _default = exports.default = getParentsByTagName
