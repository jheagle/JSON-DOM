'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.object.keys.js')

require('core-js/modules/es.regexp.exec.js')

require('core-js/modules/es.string.split.js')

require('core-js/stable')

var _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

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
var elementHasAttribute = function elementHasAttribute (element, key, attr) {
  if (!element.style) {
    return false
  }

  if (key === 'style') {
    var elementStyles = _functionalHelpers.default.reduceObject(element.style, function (styles, attr, key) {
      if (isNaN(key)) {
        return styles
      }

      styles[_functionalHelpers.default.camelCase(attr)] = element.style[attr]
      return styles
    }, {}) // For attributes which are objects or multi-part strings
    // -1 = remove attribute, 0 = no change, 1 = add attribute

    return _functionalHelpers.default.compareArrays(Object.keys(attr), Object.keys(elementStyles))
  }

  if (key === 'className') {
    // For attributes which are objects or multi-part strings
    // -1 = remove attribute, 0 = no change, 1 = add attribute
    return _functionalHelpers.default.compareArrays(attr.split(' '), element.className.split(' '))
  }

  return element.hasAttribute(key) && element.getAttribute(key) === attr
}

var _default = elementHasAttribute
exports.default = _default
