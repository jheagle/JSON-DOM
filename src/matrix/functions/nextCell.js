import 'core-js/stable'
import point from '../objects/point'

/**
 * Based on provided point and point direction generate next point.
 * @function nextCell
 * @param {module:matrixObjects~Point} pnt - Provide the current / initial point
 * @param {module:matrixObjects~Direction} dir - Provide the direction to be applied to find the next point
 * @returns {module:matrixObjects~Point}
 */
const nextCell = (pnt, dir) => point(pnt.x + dir.x, pnt.y + dir.y, pnt.z + dir.z)

export default nextCell
