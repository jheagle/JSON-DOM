import 'core-js/stable'
import checkValidPoint from './checkValidPoint'

/**
 * Retrieve the DomItem associated with the provided point
 * @function getDomItemFromPoint
 * @param {module:matrixObjects~Point} pnt - A point corresponding to a DomItem.
 * @param {module:matrixObjects~Matrix} matrix - The matrix containing the point.
 * @returns {false|module:domObjects~DomItem}
 */
const getDomItemFromPoint = (pnt, matrix) => checkValidPoint(pnt, matrix)
  ? matrix.children[pnt.z].children[pnt.y].children[pnt.x]
  : false

export default getDomItemFromPoint
