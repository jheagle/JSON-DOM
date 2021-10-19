'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.regexp.exec.js')

require('core-js/modules/es.string.split.js')

require('core-js/modules/es.object.keys.js')

require('core-js/stable')

const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Check if the provided Element has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @function
 * @memberOf module:domFunctions
 * @param {HTMLElement} element - Receive the element to be assessed
 * @param {string} key - The attribute name to search for
 * @param {string|Object} attr - The expected value of the attribute to compare against
 * @returns {boolean|Object.<string, number>}
 */
const elementHasAttribute = function elementHasAttribute (element, key, attr) {
  if (!element.style) {
    return false
  }

  if (/^(style|className)$/.test(key)) {
    // For attributes which are objects or multi-part strings
    // -1 = remove attribute, 0 = no change, 1 = add attribute
    return _functionalHelpers.default.compareArrays(typeof attr === 'string' ? attr.split(' ') : Object.keys(attr), typeof attr === 'string' ? element[key].split(' ') : Object.keys(element[key]))
  }

  return element.hasAttribute(key) && element.getAttribute(key) === attr
}

const _default = elementHasAttribute
exports.default = _default
