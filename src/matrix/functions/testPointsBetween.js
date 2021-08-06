import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import getPointsLine from './getPointsLine'

/**
 * Function that produces a property of the new Object, taking three arguments
 * @callback module:matrixFunctions~testPointStatus
 * @param {module:matrixObjects~MatrixColumn|Object} pnt - A point which may have some status.
 * @param {module:matrixObjects~Matrix|Object} matrix - A matrix of points to find the point within.
 * @returns {boolean}
 */

/**
 * Given a start and end point, test the points between with the provided function. Return the points as part of true
 * and / or false properties based on the test.
 * @function module:matrixFunctions~testPointsBetween
 * @param {module:matrixObjects~Point} start - The beginning point to check.
 * @param {module:matrixObjects~Point} end - The terminating point to check between.
 * @param {module:matrixObjects~Matrix} matrix - The grid of points all the points can exist on.
 * @param {module:matrixFunctions~testPointStatus} func - The test function which will return true or false.
 * @param {boolean} [inclusive=true] - Choose whether to include or exclude the start and end points in the results.
 * @returns {Object.<string, Array.<module:matrixObjects~Point>>}
 */
const testPointsBetween = (start, end, matrix, func, inclusive = true) =>
  getPointsLine(start, end).filter(
    (prop, i, line) => ((i !== 0 && i !== line.length - 1) || inclusive)
  ).reduce(
    (newPoints, next) => functionalHelpers.mergeObjects(
      newPoints,
      { [`${func(next, matrix)}`]: [next] }
    ),
    { true: [], false: [] }
  )

export default testPointsBetween
