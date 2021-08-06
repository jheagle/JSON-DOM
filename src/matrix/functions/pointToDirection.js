import 'core-js/stable'
import pointAndCoordinateToDirection from './pointAndCoordinateToDirection'
import getHighestAbsoluteCoordinate from './getHighestAbsoluteCoordinate'

/**
 * Having a point, convert it to a direction where the axis with the highest coordinate value will be set to -1 or 1.
 * @param {module:matrixObjects~Point} pnt - The point to be converted to a direction.
 * @returns {module:matrixObjects~Direction}
 */
const pointToDirection = pnt => pointAndCoordinateToDirection(pnt, getHighestAbsoluteCoordinate(pnt))

export default pointToDirection
