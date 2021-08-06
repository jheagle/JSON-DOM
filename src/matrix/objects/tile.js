import 'core-js/stable'

/**
 * MatrixTile is an Object which stores a reference a {@link Point} and can be populated with additionally associated
 * fields.
 * @typedef {Object.<string, module:matrixObjects~Point>} module:matrixObjects~MatrixTile
 * @property {module:matrixObjects~Point} point - a reference to its location in a
 * {@link module:matrixObjects~Matrix}
 * @property {module:matrixObjects~axis} axis - The axis will be 'x'
 */

/**
 * A default tile in the {@link module:matrixObjects~Matrix}
 * @function tile
 * @returns {module:matrixObjects~MatrixTile}
 */
const tile = () => ({
  point: {}
})

export default tile
