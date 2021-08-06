import 'core-js/stable'
import getDomItemFromPoint from './getDomItemFromPoint'
import getPointFromElement from './getPointFromElement'

/**
 * Retrieve the DomItem associated with the provided element in the matrix
 * @function getDomItemFromElement
 * @param {Node|HTMLElement} elem - Provide an element having an
 * associated DomItem.
 * @param {module:matrixObjects~Matrix} matrix - The matrix potentially containing the DomItem with Point.
 * @returns {false|module:domObjects~DomItem}
 */
const getDomItemFromElement = (elem, matrix) => getDomItemFromPoint(
  getPointFromElement(elem),
  matrix
)

export default getDomItemFromElement
