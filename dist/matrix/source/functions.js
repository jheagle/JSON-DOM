'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _adjacentEdgePoints = _interopRequireDefault(require('../functions/adjacentEdgePoints'))

const _adjacentPoints = _interopRequireDefault(require('../functions/adjacentPoints'))

const _areEqualPoints = _interopRequireDefault(require('../functions/areEqualPoints'))

const _bindPointData = _interopRequireDefault(require('../functions/bindPointData'))

const _checkInBetween = _interopRequireDefault(require('../functions/checkInBetween'))

const _checkValidPoint = _interopRequireDefault(require('../functions/checkValidPoint'))

const _getAllPoints = _interopRequireDefault(require('../functions/getAllPoints'))

const _getAxisLengths = _interopRequireDefault(require('../functions/getAxisLengths'))

const _getDomItemFromElement = _interopRequireDefault(require('../functions/getDomItemFromElement'))

const _getDomItemFromPoint = _interopRequireDefault(require('../functions/getDomItemFromPoint'))

const _getFirstAxisOfCoordinate = _interopRequireDefault(require('../functions/getFirstAxisOfCoordinate'))

const _getHighestAbsoluteCoordinate = _interopRequireDefault(require('../functions/getHighestAbsoluteCoordinate'))

const _getPointFromElement = _interopRequireDefault(require('../functions/getPointFromElement'))

const _getPointsLine = _interopRequireDefault(require('../functions/getPointsLine'))

const _getPointsLines = _interopRequireDefault(require('../functions/getPointsLines'))

const _lineEndPoint = _interopRequireDefault(require('../functions/lineEndPoint'))

const _nextCell = _interopRequireDefault(require('../functions/nextCell'))

const _pointAndCoordinateToDirection = _interopRequireDefault(require('../functions/pointAndCoordinateToDirection'))

const _pointDifference = _interopRequireDefault(require('../functions/pointDifference'))

const _pointToDirection = _interopRequireDefault(require('../functions/pointToDirection'))

const _pointsToDirection = _interopRequireDefault(require('../functions/pointsToDirection'))

const _randDirection = _interopRequireDefault(require('../functions/randDirection'))

const _randomStart = _interopRequireDefault(require('../functions/randomStart'))

const _testPointsBetween = _interopRequireDefault(require('../functions/testPointsBetween'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * @file All of the functionalHelpers matrix functions for working with a grid of points.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module matrixFunctions
 */
const _default = {
  adjacentEdgePoints: _adjacentEdgePoints.default,
  adjacentPoints: _adjacentPoints.default,
  areEqualPoints: _areEqualPoints.default,
  bindPointData: _bindPointData.default,
  checkInBetween: _checkInBetween.default,
  checkValidPoint: _checkValidPoint.default,
  getAllPoints: _getAllPoints.default,
  getAxisLengths: _getAxisLengths.default,
  getDomItemFromElement: _getDomItemFromElement.default,
  getDomItemFromPoint: _getDomItemFromPoint.default,
  getFirstAxisOfCoordinate: _getFirstAxisOfCoordinate.default,
  getHighestAbsoluteCoordinate: _getHighestAbsoluteCoordinate.default,
  getPointFromElement: _getPointFromElement.default,
  getPointsLine: _getPointsLine.default,
  getPointsLines: _getPointsLines.default,
  lineEndPoint: _lineEndPoint.default,
  nextCell: _nextCell.default,
  pointAndCoordinateToDirection: _pointAndCoordinateToDirection.default,
  pointDifference: _pointDifference.default,
  pointToDirection: _pointToDirection.default,
  pointsToDirection: _pointsToDirection.default,
  randDirection: _randDirection.default,
  randomStart: _randomStart.default,
  testPointsBetween: _testPointsBetween.default
}
exports.default = _default
