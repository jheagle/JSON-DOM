import 'core-js/stable'
import functionalHelpers from 'functional-helpers'

/**
 * Return the first coordinate number with the highest absolute value.
 * @function getHighestAbsoluteCoordinate
 * @param {module:matrixObjects~Point} pnt - A Point to be assessed.
 * @returns {module:matrixObjects~coordinate}
 */
const getHighestAbsoluteCoordinate = pnt => functionalHelpers.reduceObject(pnt, functionalHelpers.absoluteMax, 0)

export default getHighestAbsoluteCoordinate
