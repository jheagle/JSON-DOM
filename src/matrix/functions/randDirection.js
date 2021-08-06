import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import point from '../objects/point'

/**
 * Get random direction point
 * @function randDirection
 * @param {Array.<module:matrixObjects~Point>} [useCoordinates=[]] - An array of possible directions.
 * @returns {module:matrixObjects~Direction}
 */
const randDirection = (useCoordinates = []) => useCoordinates.length
  ? useCoordinates[functionalHelpers.randomInteger(useCoordinates.length)]
  : point(0, 0, 0)

export default randDirection
