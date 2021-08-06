import 'core-js/stable'
import point from '../objects/point'
import getFirstAxisOfCoordinate from './getFirstAxisOfCoordinate'

/**
 * Given a point and the value of the highest coordinate select the corresponding axis which will be the direction
 * (-1 or 1) to and set the other axis to 0.
 * @param {module:matrixObjects~Point} pnt - The which will be converted to a direction.
 * @param {module:matrixObjects~coordinate} highestCoordinate - The highest coordinate provided by the point.
 * @returns {module:matrixObjects~Direction}
 */
const pointAndCoordinateToDirection = (pnt, highestCoordinate) => (
  axis => axis !== false
    ? functionalHelpers.mergeObjects(point(0, 0, 0), { [`${axis}`]: highestCoordinate > 0 ? 1 : -1 })
    : point(0, 0, 0)
)(getFirstAxisOfCoordinate(pnt, highestCoordinate))

export default pointAndCoordinateToDirection
