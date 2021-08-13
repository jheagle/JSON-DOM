'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.array.concat.js')

require('core-js/modules/es.array.reduce.js')

require('core-js/stable')

/**
 * Return an array of all the points in the matrix
 * @function getAllPoints
 * @param {module:matrixObjects~Matrix|module:matrixObjects~MatrixColumn} matrix - The matrix to retrieve
 * points from.
 * @param {Array.<module:matrixObjects~Point>} [allPoints=[]] - The array of points to be returned
 * @returns {Array.<module:matrixObjects~Point>}
 */
const getAllPoints = function getAllPoints (matrix) {
  const allPoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
  return matrix.point
    ? allPoints.concat([matrix.point])
    : matrix.children.reduce(function (allPoints, child) {
      return allPoints.concat(getAllPoints(child, []))
    }, [])
}

const _default = getAllPoints
exports.default = _default
