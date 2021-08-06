/**
 * @file All of the functionalHelpers matrix functions for working with a grid of points.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module matrixFunctions
 */
import 'core-js/stable'
import adjacentEdgePoints from './functions/adjacentEdgePoints'
import adjacentPoints from './functions/adjacentPoints'
import areEqualPoints from './functions/areEqualPoints'
import bindPointData from './functions/bindPointData'
import checkInBetween from './functions/checkInBetween'
import checkValidPoint from './functions/checkValidPoint'
import getAllPoints from './functions/getAllPoints'
import getAxisLengths from './functions/getAxisLengths'
import getDomItemFromElement from './functions/getDomItemFromElement'
import getDomItemFromPoint from './functions/getDomItemFromPoint'
import getFirstAxisOfCoordinate from './functions/getFirstAxisOfCoordinate'
import getHighestAbsoluteCoordinate from './functions/getHighestAbsoluteCoordinate'
import getPointFromElement from './functions/getPointFromElement'
import getPointsLine from './functions/getPointsLine'
import getPointsLines from './functions/getPointsLines'
import lineEndPoint from './functions/lineEndPoint'
import nextCell from './functions/nextCell'
import pointAndCoordinateToDirection from './functions/pointAndCoordinateToDirection'
import pointDifference from './functions/pointDifference'
import pointToDirection from './functions/pointToDirection'
import pointsToDirection from './functions/pointsToDirection'
import randDirection from './functions/randDirection'
import randomStart from './functions/randomStart'
import testPointsBetween from './functions/testPointsBetween'

export default {
  adjacentEdgePoints,
  adjacentPoints,
  areEqualPoints,
  bindPointData,
  checkInBetween,
  checkValidPoint,
  getAllPoints,
  getAxisLengths,
  getDomItemFromElement,
  getDomItemFromPoint,
  getFirstAxisOfCoordinate,
  getHighestAbsoluteCoordinate,
  getPointFromElement,
  getPointsLine,
  getPointsLines,
  lineEndPoint,
  nextCell,
  pointAndCoordinateToDirection,
  pointDifference,
  pointToDirection,
  pointsToDirection,
  randDirection,
  randomStart,
  testPointsBetween,
}
