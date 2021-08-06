import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import point from '../objects/point'

/**
 * Generate a random starting point for a line with the provided length and direction.
 * @function randomStart
 * @param {number} length - The intended length the resulting line.
 * @param {module:matrixObjects~Direction} dir - The direction the line will extend towards.
 * @param {module:matrixObjects~Point} [lengthLimits={x: 10, y: 10, z: 10}] - The maximum grid size.
 * @returns {module:matrixObjects~Point}
 */
const randomStart = (
  length,
  dir,
  lengthLimits = point(10, 10, 10)
) => point(
  functionalHelpers.randomInteger(lengthLimits.x - ((length - 1) * dir.x)),
  functionalHelpers.randomInteger(lengthLimits.y - ((length - 1) * dir.y)),
  functionalHelpers.randomInteger(lengthLimits.z - ((length - 1) * dir.z))
)

export default randomStart
