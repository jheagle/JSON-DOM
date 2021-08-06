import 'core-js/stable'
import point from '../objects/point'

/**
 * Given a start point, line length, and a direction, generate the end point of the line.
 * @function lineEndPoint
 * @param {module:matrixObjects~Point} start - The selected starting point.
 * @param {number} length - The total length of the line.
 * @param {module:matrixObjects~Direction} dir - The direction of the line.
 * @returns {module:matrixObjects~Point}
 */
const lineEndPoint = (start, length, dir) => point(
  start.x + dir.x * (length - 1),
  start.y + dir.y * (length - 1),
  start.z + dir.z * (length - 1)
)

export default lineEndPoint
