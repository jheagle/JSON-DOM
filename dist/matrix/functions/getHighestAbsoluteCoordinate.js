'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Return the first coordinate number with the highest absolute value.
 * @function getHighestAbsoluteCoordinate
 * @param {module:matrixObjects~Point} pnt - A Point to be assessed.
 * @returns {module:matrixObjects~coordinate}
 */
const getHighestAbsoluteCoordinate = function getHighestAbsoluteCoordinate (pnt) {
  return _functionalHelpers.default.reduceObject(pnt, _functionalHelpers.default.absoluteMax, 0)
}

const _default = getHighestAbsoluteCoordinate
exports.default = _default
