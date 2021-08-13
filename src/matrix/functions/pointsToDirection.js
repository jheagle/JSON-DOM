import 'core-js/stable'
import pointToDirection from './pointToDirection'
import pointDifference from './pointDifference'

/**
 * Retrieve a directional coordinate value based on two provided points
 * (directions consist of two zero coordinates and a single coordinate of 1 / -1)
 * @function pointsToDirection
 * @param {module:matrixObjects~Point} start - The first point to assess.
 * @param {module:matrixObjects~Point} end - The other point to assess.
 * @returns {module:matrixObjects~Direction}
 */
const pointsToDirection = (start, end) => pointToDirection(pointDifference(start, end))

export default pointsToDirection
