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
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having child DomItems with config changes to be
 * applied
 * @returns {DomItem}
 */
const updateElements = function updateElements (config) {
  const domItem = (0, _updateElement.default)(config)
  return _functionalHelpers.default.setValue('children', _functionalHelpers.default.mapObject(domItem.children, function (child) {
    return updateElements(child)
  }), domItem)
}

const _default = updateElements
exports.default = _default
