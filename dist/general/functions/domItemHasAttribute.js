'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.map.js')
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _getAssignedStyles = _interopRequireDefault(require('./getAssignedStyles'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param {DomItem} domItem
 * @param {Object.<string, string>} attr
 * @returns {int|Object.<string, number>}
 */
const checkStyles = function (domItem) {
  var _domItem$attributes$s
  const attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
  const assignedStyles = (_domItem$attributes$s = domItem.attributes.style) !== null && _domItem$attributes$s !== void 0 ? _domItem$attributes$s : {}
  if (_siFunciona.default.emptyObject(assignedStyles)) {
    return 1
  }
  return _siFunciona.default.compareArrays(Object.keys((0, _getAssignedStyles.default)(attr)).map(_siFunciona.default.camelCase), Object.keys(assignedStyles))
}

/**
 * For attributes which are objects or multipart strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param {DomItem} domItem
 * @param {string} attr
 * @returns {int|Object.<string, number>}
 */
const checkClasses = function (domItem) {
  var _domItem$attributes$c
  const attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
  const assignedClasses = (_domItem$attributes$c = domItem.attributes.className) !== null && _domItem$attributes$c !== void 0 ? _domItem$attributes$c : ''
  if (!assignedClasses.length) {
    return 1
  }
  return _siFunciona.default.compareArrays(attr.split(' '), assignedClasses.split(' '))
}

/**
 * Check if the provided DomItem has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} domItem - Receive the DomItem to be assessed
 * @param {string} key - The attribute name to search for
 * @param {string|Object} attr - The expected value of the attribute to compare against
 * @returns {int|Object.<string, number>}
 */
const domItemHasAttribute = (domItem, key, attr) => {
  if (key === 'style') {
    return checkStyles(domItem, attr)
  }
  if (key === 'className') {
    return checkClasses(domItem, attr)
  }
  const camelKey = _siFunciona.default.camelCase(key)
  if (typeof domItem.attributes[camelKey] === 'undefined') {
    return 1
  }
  if (domItem.attributes[camelKey] === attr) {
    return 0
  }
  return 1
}
var _default = exports.default = domItemHasAttribute
