'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _siFunciona = _interopRequireDefault(require('si-funciona'))
const _getParentsFromAttribute = _interopRequireDefault(require('./getParentsFromAttribute.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Helper for getting all domGeneral.DomItems starting at child and having specified name attribute
 * @function
 * @memberOf module:domGeneral
 * @param {*} name - The name to search for
 * @param {DomItem} item - The DomItem which may have parent items matching the
 * attribute criteria
 * @returns {Array}
 */
const getParentsByName = _siFunciona.default.curry(_getParentsFromAttribute.default)('name')
const _default = exports.default = getParentsByName
