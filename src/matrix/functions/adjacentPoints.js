import 'core-js/stable'
import getPointsLines from './getPointsLines'
import point from '../objects/point'
import nextCell from './nextCell'
import checkValidPoint from './checkValidPoint'

/**
 * Return all valid points surrounding a provided point
 * @function adjacentPoints
 * @param {module:matrixObjects~Point} pnt - The point we want to find adjacent points for.
 * @param {module:matrixObjects~Matrix} matrix - The matrix having the point.
 * @returns {Array.<module:matrixObjects~Point>}
 */
const adjacentPoints = (pnt, matrix) => getPointsLines([
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

export default adjacentPoints
