import 'core-js/stable'

/**
 * A string representing an axis: x, y, z
 * @typedef {string} module:matrixObjects~axis
 */

/**
 * A number representing a coordinate in a {@link module:matrixObjects~Matrix}
 * @typedef {number} module:matrixObjects~coordinate
 */

/**
 * Point stores a location in a {@link module:matrixObjects~Matrix} defined by three key-value pairs
 * ({@link module:matrixObjects~axis}=>{@link module:matrixObjects~coordinate})
 * @typedef {
 * Object.<module:matrixObjects~axis, module:matrixObjects~coordinate>
 *   } module:matrixObjects~Point
 * @property {module:matrixObjects~coordinate} x - The X-coordinate of a Point
 * @property {module:matrixObjects~coordinate} y - The Y-coordinate of a Point
 * @property {module:matrixObjects~coordinate} z - The Z-coordinate of a Point
 */

/**
 * Point stores a location in a {@link module:matrixObjects~Matrix} defined by three key-value pairs
 * @typedef {module:matrixObjects~Point} module:matrixObjects~Direction
 * @property {module:matrixObjects~coordinate} x - The X-coordinate must be either -1, 0, or 1
 * @property {module:matrixObjects~coordinate} y - The Y-coordinate must be either -1, 0, or 1
 * @property {module:matrixObjects~coordinate} z - The Z-coordinate must be either -1, 0, or 1
 */

/**
 * Store the point data for an x, y, z {@link module:matrixObjects~Matrix}.
 * @function point
 * @param {module:matrixObjects~coordinate} x - The numeric value for X-coordinate
 * @param {module:matrixObjects~coordinate} y - The numeric value for Y-coordinate
 * @param {module:matrixObjects~coordinate} [z=0] - The numeric value for Z-coordinate (default to 0 for 2D
 * {@link module:matrixObjects~Matrix})
 * @returns {module:matrixObjects~Point}
 */
const point = (x, y, z = 0) => ({ x: x, y: y, z: z })

export default point
