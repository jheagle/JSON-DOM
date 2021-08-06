import 'core-js/stable'
import matrix from './matrix'

/**
 * Return a single layer matrix where x and y are equal
 * @function square
 * @param {Array.<module:matrixObjects~MatrixTile>} [x=[]] - All the data to be presented as part of the
 * specified point, requires MatrixTile base
 * @param {Array.<module:matrixObjects~MatrixRow>} [y=[]] - Additional data to append to the MatrixRow
 * @param {Array.<module:matrixObjects~MatrixLayer>} [z=[]] - Additional data to append to the MatrixLayer
 * @param {Array.<module:matrixObjects~Matrix>} [matrixProps=[]] - Additional data to append to the Matrix
 * @param {number} size - Used to define height and width as equal values (depth is set to 1)
 * @returns {module:matrixObjects~Matrix}
 */
const square = ({ x = [], y = [], z = [], matrixProps = [] } = {}, size) => matrix(
  { coordinate: size, props: x },
  { coordinate: size, props: y },
  { coordinate: 1, props: z },
  matrixProps
)

export default square
