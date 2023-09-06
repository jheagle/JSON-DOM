'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _getChildrenFromAttribute = _interopRequireDefault(require('./getChildrenFromAttribute.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Helper for getting all domObjects.DomItems starting at parent and having specified name attribute
 * @function
 * @memberOf module:domFunctions
 * @returns {DomItem[]}
 */
const getChildrenByName = _siFunciona.default.curry(_getChildrenFromAttribute.default)('name')
var _default = getChildrenByName
exports.default = _default
