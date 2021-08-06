import 'core-js/stable'

/**
 * Return an array of all the points in the matrix
 * @function getAllPoints
 * @param {module:matrixObjects~Matrix|module:matrixObjects~MatrixColumn} matrix - The matrix to retrieve
 * points from.
 * @param {Array.<module:matrixObjects~Point>} [allPoints=[]] - The array of points to be returned
 * @returns {Array.<module:matrixObjects~Point>}
 */
const getAllPoints = (matrix, allPoints = []) => (matrix.point)
  ? allPoints.concat([matrix.point])
  : matrix.children.reduce((allPoints, child) => allPoints.concat(getAllPoints(child, [])), [])

export default getAllPoints
