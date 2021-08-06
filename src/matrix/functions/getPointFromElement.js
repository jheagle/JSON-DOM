import 'core-js/stable'
import point from '../objects/point'

/**
 * Retrieve the point associated with the provided element.
 * @function getPointFromElement
 * @param {Node|HTMLElement} elem - Provide an element associated with
 * a point.
 * @returns {module:matrixObjects~Point}
 */
const getPointFromElement = elem => point(
  Array.from(elem.parentNode.childNodes).indexOf(elem),
  Array.from(elem.parentNode.parentNode.childNodes).indexOf(elem.parentNode),
  Array.from(elem.parentNode.parentNode.parentNode.childNodes).indexOf(elem.parentNode.parentNode)
)

export default getPointFromElement
