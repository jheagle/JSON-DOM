'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

const _generateElement = _interopRequireDefault(require('./generateElement'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Generate HTML element data for a provided DomItem
 * @function
 * @memberOf module:domFunctions
 * @param {module:domObjects~DomItem} item - The DomItem needing element to be generated
 * @return {module:domObjects~DomItem}
 */
const bindElement = function bindElement (item) {
  return _functionalHelpers.default.setValue('element', !item.element || !item.element.style ? (0, _generateElement.default)(item).element : item.element, item)
}

const _default = bindElement
exports.default = _default
