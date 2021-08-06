import 'core-js/stable'

/**
 * Having provided a coordinate number, find all corresponding axis, return the first match.
 * @function getFirstAxisOfCoordinate
 * @param {module:matrixObjects~Point} pnt - The Point containing a matching coordinate.
 * @param {module:matrixObjects~coordinate} coordinate - The coordinate to search for.
 * @returns {false|module:matrixObjects~axis}
 */
const getFirstAxisOfCoordinate = (pnt, coordinate) => Object.keys(pnt).filter(
  (key) => pnt[key] === coordinate
)[0] || false

export default getFirstAxisOfCoordinate
