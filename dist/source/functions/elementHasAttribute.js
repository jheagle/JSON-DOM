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

require('core-js/modules/es.array.from.js')

require('core-js/modules/es.string.iterator.js')

require('core-js/modules/es.regexp.exec.js')

require('core-js/modules/es.string.split.js')

require('core-js/stable')

var _getAssignedStyles2 = _interopRequireDefault(require('./getAssignedStyles.js'))

var _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param {HTMLElement} element
 * @param {string|Object<string, string>} attr
 * @returns {int|Object.<string, number>}
 */
var checkStyles = function checkStyles (element) {
  var _getAssignedStyles

  var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
  var assignedStyles = (_getAssignedStyles = (0, _getAssignedStyles2.default)(element.style)) !== null && _getAssignedStyles !== void 0 ? _getAssignedStyles : {}

  if (_functionalHelpers.default.emptyObject(assignedStyles)) {
    return 1
  }

  return _functionalHelpers.default.compareArrays(Object.keys(attr).map(_functionalHelpers.default.kabobCase), Object.keys(assignedStyles))
}
/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param {HTMLElement} element
 * @param {string} attr
 * @returns {int|Object.<string, number>}
 */

var checkClasses = function checkClasses (element) {
  var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
  var assignedClasses = Array.from(element.classList)

  if (!assignedClasses.length) {
    return 1
  }

  return _functionalHelpers.default.compareArrays(attr.split(' '), assignedClasses)
}
/**
 * Check if the provided Element has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @function
 * @memberOf module:domFunctions
 * @param {HTMLElement} element - Receive the element to be assessed
 * @param {string} key - The attribute name to search for
 * @param {string|Object.<string, string>} attr - The expected value of the attribute to compare against
 * @returns {int|Object.<string, number>}
 */

var elementHasAttribute = function elementHasAttribute (element, key, attr) {
  if (!element) {
    return 1
  }

  if (key === 'style') {
    return checkStyles(element, attr)
  }

  if (key === 'class') {
    return checkClasses(element, attr)
  }

  var kabobKey = _functionalHelpers.default.kabobCase(key)

  if (!element.hasAttribute(kabobKey)) {
    return 1
  }

  if (element.getAttribute(kabobKey) === attr) {
    return 0
  }

  return 1
}

var _default = elementHasAttribute
exports.default = _default
