'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _point = _interopRequireDefault(require('../objects/point'))

const _getFirstAxisOfCoordinate = _interopRequireDefault(require('./getFirstAxisOfCoordinate'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _defineProperty (obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }) } else { obj[key] = value } return obj }

/**
 * Given a point and the value of the highest coordinate select the corresponding axis which will be the direction
 * (-1 or 1) to and set the other axis to 0.
 * @param {module:matrixObjects~Point} pnt - The which will be converted to a direction.
 * @param {module:matrixObjects~coordinate} highestCoordinate - The highest coordinate provided by the point.
 * @returns {module:matrixObjects~Direction}
 */
const pointAndCoordinateToDirection = function pointAndCoordinateToDirection (pnt, highestCoordinate) {
  return (function (axis) {
    return axis !== false ? functionalHelpers.mergeObjects((0, _point.default)(0, 0, 0), _defineProperty({}, ''.concat(axis), highestCoordinate > 0 ? 1 : -1)) : (0, _point.default)(0, 0, 0)
  }((0, _getFirstAxisOfCoordinate.default)(pnt, highestCoordinate)))
}

const _default = pointAndCoordinateToDirection
exports.default = _default
