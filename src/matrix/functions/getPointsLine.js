import 'core-js/stable'
import areEqualPoints from './areEqualPoints'
import nextCell from './nextCell'
import pointsToDirection from './pointsToDirection'

/**
 * Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
 * includes 'start' (line[0]) and 'end' (line[line.length-1])
 * @function getPointsLine
 * @param {module:matrixObjects~Point} start - The starting location of the line.
 * @param {module:matrixObjects~Point} end - The final line destination.
 * @param {Array.<module:matrixObjects~Point>} [line=[]] - The resulting line to connect start and end.
 * @returns {Array.<module:matrixObjects~Point>}
 */
const getPointsLine = (start, end, line = []) => areEqualPoints(start, end)
  ? line.concat([start])
  : getPointsLine(
    nextCell(start, pointsToDirection(start, end)),
    end,
    line.concat([start])
  )

export default getPointsLine
