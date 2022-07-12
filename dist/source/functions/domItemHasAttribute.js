'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.array.map.js')

require('core-js/modules/esnext.async-iterator.map.js')

require('core-js/modules/esnext.iterator.map.js')

require('core-js/modules/es.object.keys.js')

require('core-js/modules/es.regexp.exec.js')

require('core-js/modules/es.string.split.js')

require('core-js/stable')

var _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

var _getAssignedStyles = _interopRequireDefault(require('./getAssignedStyles'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param {DomItem} domItem
 * @param {Object.<string, string>} attr
 * @returns {int|Object.<string, number>}
 */
var checkStyles = function checkStyles (domItem) {
  var _domItem$attributes$s

  var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
  var assignedStyles = (_domItem$attributes$s = domItem.attributes.style) !== null && _domItem$attributes$s !== void 0 ? _domItem$attributes$s : {}

  if (_functionalHelpers.default.emptyObject(assignedStyles)) {
    return 1
  }

  return _functionalHelpers.default.compareArrays(Object.keys((0, _getAssignedStyles.default)(attr)).map(_functionalHelpers.default.camelCase), Object.keys(assignedStyles))
}
/**
 * For attributes which are objects or multipart strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param {DomItem} domItem
 * @param {string} attr
 * @returns {int|Object.<string, number>}
 */

var checkClasses = function checkClasses (domItem) {
  var _domItem$attributes$c

  var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
  var assignedClasses = (_domItem$attributes$c = domItem.attributes.className) !== null && _domItem$attributes$c !== void 0 ? _domItem$attributes$c : ''

  if (!assignedClasses.length) {
    return 1
  }

  return _functionalHelpers.default.compareArrays(attr.split(' '), assignedClasses.split(' '))
}
/**
 * Check if the provided DomItem has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem - Receive the DomItem to be assessed
 * @param {string} key - The attribute name to search for
 * @param {string|Object} attr - The expected value of the attribute to compare against
 * @returns {int|Object.<string, number>}
 */

var domItemHasAttribute = function domItemHasAttribute (domItem, key, attr) {
  if (key === 'style') {
    return checkStyles(domItem, attr)
  }

  if (key === 'className') {
    return checkClasses(domItem, attr)
  }

  var camelKey = _functionalHelpers.default.camelCase(key)

  if (typeof domItem.attributes[camelKey] === 'undefined') {
    return 1
  }

  if (domItem.attributes[camelKey] === attr) {
    return 0
  }

  return 1
}

var _default = domItemHasAttribute
exports.default = _default
