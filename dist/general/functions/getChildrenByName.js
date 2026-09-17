'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _getChildrenFromAttribute = _interopRequireDefault(require('./getChildrenFromAttribute.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Helper for getting all domGeneral.DomItems starting at parent and having specified name attribute
 * @function
 * @memberOf module:domGeneral
 * @param {*} name - The name searched for
 * @param {DomItem} item - The DomItem which may have child items matching the attribute
 * criteria
 * @returns {Array.<DomItem>}
 */
const getChildrenByName = _siFunciona.default.curry(_getChildrenFromAttribute.default)('name')
var _default = exports.default = getChildrenByName
