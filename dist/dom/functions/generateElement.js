'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

const _updateElement = _interopRequireDefault(require('./updateElement'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Create an HTML element based on the provided attributes and return the element as an Object.
 * @function
 * @memberOf module:domFunctions
 * @param {module:domObjects~DomItem} config - The DomItem requiring matching HTML element property
 * @return {module:domObjects~DomItem}
 */
const generateElement = function generateElement (config) {
  return (0, _updateElement.default)(_functionalHelpers.default.setValue('element', document.createElement(config.tagName), config))
}

const _default = generateElement
exports.default = _default
