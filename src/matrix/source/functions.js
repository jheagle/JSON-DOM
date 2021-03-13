/**
 * @file All of the functionalHelpers matrix functions for working with a grid of points.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 */

import functionalHelpers from 'functional-helpers'
import { point } from './objects'

/**
   * Generate point data for each item in the matrix
   * WARNING: This is a recursive function.
   * @function bindPointData
   * @param {module:matrix/objects.MatrixColumn|module:matrix/objects.MatrixRow} item - A special DomItem
   * which is either a layer, row, or column in a matrix.
   * @param {module:matrix/objects.Point} pnt - A point to be added to a specific Matrix Column
   * @returns {module:matrix/objects.MatrixColumn|module:matrix/objects.MatrixRow}
   */
export const bindPointData = (item, pnt = point(0, 0, 0)) => functionalHelpers.mergeObjects(
  item,
  item.point
    ? { point: functionalHelpers.cloneObject(pnt) }
    : { children: item.children.map((el, i) => bindPointData(el, Object.assign(pnt, { [el.axis]: i }))) }
)

/**
   * Based on provided point and point direction generate next point.
   * @function nextCell
   * @param {module:matrix/objects.Point} pnt - Provide the current / initial point
   * @param {module:matrix/objects.Direction} dir - Provide the direction to be applied to find the next point
   * @returns {module:matrix/objects.Point}
   */
export const nextCell = (pnt, dir) => point(pnt.x + dir.x, pnt.y + dir.y, pnt.z + dir.z)

/**
   * Based on provided point and another point, get a point with the difference between each axis
   * @function pointDifference
   * @param {module:matrix/objects.Point} start - The first point to compare
   * @param {module:matrix/objects.Point} end - The other point to be compared
   * @returns {module:matrix/objects.Point}
   */
export const pointDifference = (start, end) => point(
  end.x - start.x,
  end.y - start.y,
  end.z - start.z
)

/**
   * Given two points, compare the x, y, and z of each to see if they are the same
   * @function areEqualPoints
   * @param {module:matrix/objects.Point} p1 - The first point to compare
   * @param {module:matrix/objects.Point} p2 - The other point to be compared
   * @returns {boolean}
   */
export const areEqualPoints = (p1, p2) => p1.x === p2.x && p1.y === p2.y && p1.z === p2.z

/**
   * Return the first coordinate number with the highest absolute value.
   * @function getHighestAbsoluteCoordinate
   * @param {module:matrix/objects.Point} pnt - A Point to be assessed.
   * @returns {module:matrix/objects.coordinate}
   */
export const getHighestAbsoluteCoordinate = pnt => functionalHelpers.reduceObject(pnt, functionalHelpers.getAbsoluteMax, 0)

/**
   * Having provided a coordinate number, find all corresponding axis, return the first match.
   * @function getFirstAxisOfCoordinate
   * @param {module:matrix/objects.Point} pnt - The Point containing a matching coordinate.
   * @param {module:matrix/objects.coordinate} coordinate - The coordinate to search for.
   * @returns {false|module:matrix/objects.axis}
   */
export const getFirstAxisOfCoordinate = (pnt, coordinate) => Object.keys(pnt).filter(
  (key) => pnt[key] === coordinate
)[0] || false

/**
   * Given a point and the value of the highest coordinate select the corresponding axis which will be the direction
   * (-1 or 1) to and set the other axis to 0.
   * @param {module:matrix/objects.Point} pnt - The which will be converted to a direction.
   * @param {module:matrix/objects.coordinate} highestCoordinate - The highest coordinate provided by the point.
   * @returns {module:matrix/objects.Direction}
   */
const pointAndCoordinateToDirection = (pnt, highestCoordinate) => (
  axis => axis !== false
    ? functionalHelpers.mergeObjects(point(0, 0, 0), { [`${axis}`]: highestCoordinate > 0 ? 1 : -1 })
    : point(0, 0, 0)
)(getFirstAxisOfCoordinate(pnt, highestCoordinate))

/**
   * Having a point, convert it to a direction where the axis with the highest coordinate value will be set to -1 or 1.
   * @param {module:matrix/objects.Point} pnt - The point to be converted to a direction.
   * @returns {module:matrix/objects.Direction}
   */
const pointToDirection = pnt => pointAndCoordinateToDirection(pnt, getHighestAbsoluteCoordinate(pnt))

/**
   * Retrieve a directional coordinate value based on two provided points
   * (directions consist of two zero coordinates and a single coordinate of 1 / -1)
   * @function pointsToDirection
   * @param {module:matrix/objects.Point} start - The first point to assess.
   * @param {module:matrix/objects.Point} end - The other point to assess.
   * @returns {module:matrix/objects.Direction}
   */
export const pointsToDirection = (start, end) => pointToDirection(pointDifference(start, end))

/**
   * Generate a random starting point for a line with the provided length and direction.
   * @function randomStart
   * @param {number} length - The intended length the resulting line.
   * @param {module:matrix/objects.Direction} dir - The direction the line will extend towards.
   * @param {module:matrix/objects.Point} [lengthLimits={x: 10, y: 10, z: 10}] - The maximum grid size.
   * @returns {module:matrix/objects.Point}
   */
export const randomStart = (
  length,
  dir,
  lengthLimits = point(10, 10, 10)
) => point(
  functionalHelpers.randomInteger(lengthLimits.x - ((length - 1) * dir.x)),
  functionalHelpers.randomInteger(lengthLimits.y - ((length - 1) * dir.y)),
  functionalHelpers.randomInteger(lengthLimits.z - ((length - 1) * dir.z))
)

/**
   * Given a start point, line length, and a direction, generate the end point of the line.
   * @function lineEndPoint
   * @param {module:matrix/objects.Point} start - The selected starting point.
   * @param {number} length - The total length of the line.
   * @param {module:matrix/objects.Direction} dir - The direction of the line.
   * @returns {module:matrix/objects.Point}
   */
export const lineEndPoint = (start, length, dir) => point(
  start.x + dir.x * (length - 1),
  start.y + dir.y * (length - 1),
  start.z + dir.z * (length - 1)
)

/**
   * Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
   * includes 'start' (line[0]) and 'end' (line[line.length-1])
   * @function getPointsLine
   * @param {module:matrix/objects.Point} start - The starting location of the line.
   * @param {module:matrix/objects.Point} end - The final line destination.
   * @param {Array.<module:matrix/objects.Point>} [line=[]] - The resulting line to connect start and end.
   * @returns {Array.<module:matrix/objects.Point>}
   */
export const getPointsLine = (start, end, line = []) => areEqualPoints(start, end)
  ? line.concat([start])
  : getPointsLine(
    nextCell(start, pointsToDirection(start, end)),
    end,
    line.concat([start])
  )

/**
   * Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
   * array of all points captured for each line segment
   * @function getPointsLines
   * @param {Array.<Array.<module:matrix/objects.Point>>} lines - An array of lines only containing start and end.
   * @returns {Array.<Array.<module:matrix/objects.Point>>}
   */
export const getPointsLines = lines => lines.reduce(
  (pointsArray, line) => pointsArray.concat(getPointsLine(...line)),
  []
)

/**
   * Function that produces a property of the new Object, taking three arguments
   * @callback module:matrix/core~testPointStatus
   * @param {module:matrix/objects.MatrixColumn|Object} pnt - A point which may have some status.
   * @param {module:matrix/objects.Matrix|Object} matrix - A matrix of points to find the point within.
   * @returns {boolean}
   */

/**
   * Given a start and end point, test the points between with the provided function. Return the points as part of true
   * and / or false properties based on the test.
   * @function module:matrix/core~testPointsBetween
   * @param {module:matrix/objects.Point} start - The beginning point to check.
   * @param {module:matrix/objects.Point} end - The terminating point to check between.
   * @param {module:matrix/objects.Matrix} matrix - The grid of points all the points can exist on.
   * @param {module:matrix/core~testPointStatus} func - The test function which will return true or false.
   * @param {boolean} [inclusive=true] - Choose whether to include or exclude the start and end points in the results.
   * @returns {Object.<string, Array.<module:matrix/objects.Point>>}
   */
export const testPointsBetween = (start, end, matrix, func, inclusive = true) =>
  getPointsLine(start, end).filter(
    (prop, i, line) => ((i !== 0 && i !== line.length - 1) || inclusive)
  ).reduce(
    (newPoints, next) => functionalHelpers.mergeObjects(
      newPoints,
      { [`${func(next, matrix)}`]: [next] }
    ),
    { true: [], false: [] }
  )

/**
   * Given two points, check the cells between using specified function.
   * When inclusive is set to true the provided start and end points will also be tested
   * @function checkInBetween
   * @param {...*} args - These args match the parameter list for {@link module:matrix/core~testPointsBetween}
   * @returns {boolean}
   */
export const checkInBetween = (...args) => !!testPointsBetween(...args).true.length

/**
   * Return point-like object with all of the axis lengths.
   * @function getAxisLengths
   * @param {module:matrix/objects.Matrix} matrix - The matrix to get the dimensions of.
   * @returns {module:matrix/objects.Point}
   */
export const getAxisLengths = (matrix) => point(
  matrix.children[0].children[0].children.length,
  matrix.children[0].children.length,
  matrix.children.length
)

/**
   * Get random direction point
   * @function randDirection
   * @param {Array.<module:matrix/objects.Point>} [useCoordinates=[]] - An array of possible directions.
   * @returns {module:matrix/objects.Direction}
   */
export const randDirection = (useCoordinates = []) => useCoordinates.length
  ? useCoordinates[functionalHelpers.randomInteger(useCoordinates.length)]
  : point(0, 0, 0)

/**
   * Test if the provided point exists in the matrix.
   * @function checkValidPoint
   * @param {module:matrix/objects.Point} pnt - Provide a point to validate.
   * @param {module:matrix/objects.Matrix} matrix - The matrix that contains valid points.
   * @returns {boolean}
   */
export const checkValidPoint = (pnt, matrix) => !!matrix.children[pnt.z] &&
    !!matrix.children[pnt.z].children[pnt.y] &&
    !!matrix.children[pnt.z].children[pnt.y].children[pnt.x] &&
    !!matrix.children[pnt.z].children[pnt.y].children[pnt.x].point

/**
   * Retrieve the DomItem associated with the provided point
   * @function getDomItemFromPoint
   * @param {module:matrix/objects.Point} pnt - A point corresponding to a DomItem.
   * @param {module:matrix/objects.Matrix} matrix - The matrix containing the point.
   * @returns {false|module:dom/objects.DomItem}
   */
export const getDomItemFromPoint = (pnt, matrix) => checkValidPoint(pnt, matrix)
  ? matrix.children[pnt.z].children[pnt.y].children[pnt.x]
  : false

/**
   * Return an array of all the points in the matrix
   * @function getAllPoints
   * @param {module:matrix/objects.Matrix|module:matrix/objects.MatrixColumn} matrix - The matrix to retrieve
   * points from.
   * @param {Array.<module:matrix/objects.Point>} [allPoints=[]] - The array of points to be returned
   * @returns {Array.<module:matrix/objects.Point>}
   */
export const getAllPoints = (matrix, allPoints = []) => (matrix.point)
  ? allPoints.concat([matrix.point])
  : matrix.children.reduce((allPoints, child) => allPoints.concat(getAllPoints(child, [])), [])

/**
   * Return all valid points surrounding a provided point
   * @function adjacentPoints
   * @param {module:matrix/objects.Point} pnt - The point we want to find adjacent points for.
   * @param {module:matrix/objects.Matrix} matrix - The matrix having the point.
   * @returns {Array.<module:matrix/objects.Point>}
   */
export const adjacentPoints = (pnt, matrix) => getPointsLines([
  [point(-1, 1, 1), point(1, -1, -1)],
  [point(1, 1, 1), point(-1, 1, -1)],
  [point(-1, -1, 1), point(1, -1, 1)],
  [point(1, 0, 0), point(1, 1, -1)],
  [point(-1, 1, 0), point(1, 1, 0)]
]).concat([
  point(0, 0, 1),
  point(1, 0, 0),
  point(-1, 0, -1),
  point(0, 0, -1)
]).map(p => nextCell(pnt, p))
  .filter(p => checkValidPoint(nextCell(pnt, p), matrix))

/**
   * Return all points which touch on edges (not diagonal)
   * @function adjacentEdgePoints
   * @param {module:matrix/objects.Point} pnt - The point we want to find adjacent points for.
   * @param {module:matrix/objects.Matrix} matrix - The matrix having the point.
   * @returns {Array.<module:matrix/objects.Point>}
   */
export const adjacentEdgePoints = (pnt, matrix) => [
  point(-1, 0, 0),
  point(1, 0, 0),
  point(0, -1, 0),
  point(0, 1, 0),
  point(0, 0, -1),
  point(0, 0, 1)
].map(p => nextCell(pnt, p)).filter(p => checkValidPoint(p, matrix))

/**
   * Retrieve the point associated with the provided element.
   * @function getPointFromElement
   * @param {Node|HTMLElement|module:pseudoDom/objects.PseudoHTMLElement} elem - Provide an element associated with
   * a point.
   * @returns {module:matrix/objects.Point}
   */
export const getPointFromElement = elem => point(
  Array.from(elem.parentNode.childNodes).indexOf(elem),
  Array.from(elem.parentNode.parentNode.childNodes).indexOf(elem.parentNode),
  Array.from(elem.parentNode.parentNode.parentNode.childNodes).indexOf(elem.parentNode.parentNode)
)

/**
   * Retrieve the DomItem associated with the provided element in the matrix
   * @function getDomItemFromElement
   * @param {Node|HTMLElement|module:pseudoDom/objects.PseudoHTMLElement} elem - Provide an element having an
   * associated DomItem.
   * @param {module:matrix/objects.Matrix} matrix - The matrix potentially containing the DomItem with Point.
   * @returns {module:dom/objects.DomItem}
   */
export const getDomItemFromElement = (elem, matrix) => getDomItemFromPoint(
  getPointFromElement(elem),
  matrix
)
