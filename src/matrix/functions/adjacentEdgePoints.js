import 'core-js/stable'
import point from '../objects/point'
import nextCell from './nextCell'
import checkValidPoint from './checkValidPoint'

/**
 * Return all points which touch on edges (not diagonal)
 * @function adjacentEdgePoints
 * @param {module:matrixObjects~Point} pnt - The point we want to find adjacent points for.
 * @param {module:matrixObjects~Matrix} matrix - The matrix having the point.
 * @returns {Array.<module:matrixObjects~Point>}
 */
const adjacentEdgePoints = (pnt, matrix) => [
  point(-1, 0, 0),
  point(1, 0, 0),
  point(0, -1, 0),
  point(0, 1, 0),
  point(0, 0, -1),
  point(0, 0, 1)
].map(p => nextCell(pnt, p)).filter(p => checkValidPoint(p, matrix))

export default adjacentEdgePoints
