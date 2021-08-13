'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _pointToDirection = _interopRequireDefault(require('./pointToDirection'))

const _pointDifference = _interopRequireDefault(require('./pointDifference'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Retrieve a directional coordinate value based on two provided points
 * (directions consist of two zero coordinates and a single coordinate of 1 / -1)
 * @function pointsToDirection
 * @param {module:matrixObjects~Point} start - The first point to assess.
 * @param {module:matrixObjects~Point} end - The other point to assess.
 * @returns {module:matrixObjects~Direction}
 */
const pointsToDirection = function pointsToDirection (start, end) {
  return (0, _pointToDirection.default)((0, _pointDifference.default)(start, end))
}

const _default = pointsToDirection
exports.default = _default
