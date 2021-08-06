import 'core-js/stable'
import point from '../objects/point'

/**
 * Return point-like object with all of the axis lengths.
 * @function getAxisLengths
 * @param {module:matrixObjects~Matrix} matrix - The matrix to get the dimensions of.
 * @returns {module:matrixObjects~Point}
 */
const getAxisLengths = (matrix) => point(
  matrix.children[0].children[0].children.length,
  matrix.children[0].children.length,
  matrix.children.length
)

export default getAxisLengths
