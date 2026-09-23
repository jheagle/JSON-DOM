'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.map.js')
require('core-js/stable')
const _getAssignedStyles = _interopRequireDefault(require('./getAssignedStyles.js'))
const _siFunciona = _interopRequireDefault(require('si-funciona'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @function
 * @memberOf module:domGeneral
 * @param {HTMLElement} element
 * @param {string|Object<string, string>} attr
 * @returns {int|Object.<string, number>}
 */
const checkStyles = (element, attr = {}) => {
  const assignedStyles = (0, _getAssignedStyles.default)(element.style) ?? {}
  if (_siFunciona.default.emptyObject(assignedStyles)) {
    return 1
  }
  return _siFunciona.default.compareArrays(Object.keys(attr).map(_siFunciona.default.kabobCase), Object.keys(assignedStyles))
}

/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @function
 * @memberOf module:domGeneral
 * @param {HTMLElement} element
 * @param {string} attr
 * @returns {int|Object.<string, number>}
 */
const checkClasses = (element, attr = '') => {
  if (typeof attr !== 'string') {
    // Somehow an empty object got in here one time
    attr = ''
  }
  const assignedClasses = Array.from(element.classList)
  if (!assignedClasses.length) {
    return 1
  }
  return _siFunciona.default.compareArrays(attr.split(' '), assignedClasses)
}

/**
 * Check if the provided Element has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @function
 * @memberOf module:domGeneral
 * @param {HTMLElement} element - Receive the element to be assessed
 * @param {string} key - The attribute name to search for
 * @param {string|Object.<string, string>} attr - The expected value of the attribute to compare against
 * @returns {int|Object.<string, number>}
 */
const elementHasAttribute = (element, key, attr) => {
  if (!element) {
    return 1
  }
  if (key === 'style') {
    return checkStyles(element, attr)
  }
  if (key === 'class') {
    return checkClasses(element, attr)
  }
  const kabobKey = _siFunciona.default.kabobCase(key)
  if (!element.hasAttribute(kabobKey)) {
    return 1
  }
  if (element.getAttribute(kabobKey) === attr) {
    return 0
  }
  return 1
}
const _default = exports.default = elementHasAttribute
