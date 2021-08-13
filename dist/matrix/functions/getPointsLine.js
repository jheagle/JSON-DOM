'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.array.concat.js')

require('core-js/stable')

const _areEqualPoints = _interopRequireDefault(require('./areEqualPoints'))

const _nextCell = _interopRequireDefault(require('./nextCell'))

const _pointsToDirection = _interopRequireDefault(require('./pointsToDirection'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
 * includes 'start' (line[0]) and 'end' (line[line.length-1])
 * @function getPointsLine
 * @param {module:matrixObjects~Point} start - The starting location of the line.
 * @param {module:matrixObjects~Point} end - The final line destination.
 * @param {Array.<module:matrixObjects~Point>} [line=[]] - The resulting line to connect start and end.
 * @returns {Array.<module:matrixObjects~Point>}
 */
const getPointsLine = function getPointsLine (start, end) {
  const line = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : []
  return (0, _areEqualPoints.default)(start, end) ? line.concat([start]) : getPointsLine((0, _nextCell.default)(start, (0, _pointsToDirection.default)(start, end)), end, line.concat([start]))
}

const _default = getPointsLine
exports.default = _default
