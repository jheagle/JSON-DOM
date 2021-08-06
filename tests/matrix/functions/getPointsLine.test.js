/**
 * @jest-environment jsdom
 */
import point from '../../../src/matrix/objects/point'
import getPointsLine from '../../../src/matrix/functions/getPointsLine'

const p1 = point(1, 2, 3)
const p2 = point(2, 3, 4)

test('returns four points', () => {
  expect(getPointsLine(p1, p2).length).toBe(4)
})