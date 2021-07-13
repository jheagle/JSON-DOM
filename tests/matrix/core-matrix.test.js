/**
 * @jest-environment jsdom
 */
import * as jDomObjectsMatrix from '../../dist/matrix/source/objects.js'
import * as jDomCoreMatrix from '../../dist/matrix/source/functions.js'

const p1 = jDomObjectsMatrix.point(1, 2, 3)
const p2 = jDomObjectsMatrix.point(2, 3, 4)

// adjacentEdgePoints
// adjacentPoints
// bindPointData
// areEqualPoints
// checkInBetween
// checkValidPoint
// getAllPoints
// getAxisLengths
// getAxisOfCoord
// getDOMItemFromPoint
// getHighAbsoluteCoord
// getHighAbsoluteCoordAxis
// getInBetween
// getPointsLine
test('returns four points', () => {
  expect(jDomCoreMatrix.getPointsLine(p1, p2).length).toBe(4)
})

// getPointsLines
// lineEndPoint
// nextCell
// noConflict
// pointDifference
// pointsToDirection
// pointHasNegative
// randDirection
// randomStart
// testPointsBetween
