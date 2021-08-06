import 'core-js/stable'
import testPointsBetween from './testPointsBetween'

/**
 * Given two points, check the cells between using specified function.
 * When inclusive is set to true the provided start and end points will also be tested
 * @function checkInBetween
 * @param {...*} args - These args match the parameter list for {@link module:matrixFunctions~testPointsBetween}
 * @returns {boolean}
 */
const checkInBetween = (...args) => !!testPointsBetween(...args).true.length

export default checkInBetween
