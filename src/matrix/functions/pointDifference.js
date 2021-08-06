import 'core-js/stable'
import point from '../objects/point'

/**
 * Based on provided point and another point, get a point with the difference between each axis
 * @function pointDifference
 * @param {module:matrixObjects~Point} start - The first point to compare
 * @param {module:matrixObjects~Point} end - The other point to be compared
 * @returns {module:matrixObjects~Point}
 */
const pointDifference = (start, end) => point(
  end.x - start.x,
  end.y - start.y,
  end.z - start.z
)

export default pointDifference
