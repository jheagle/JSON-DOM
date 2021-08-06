/**
 * @jest-environment jsdom
 */
import square from '../../../src/matrix/objects/square'

test('grid is 1 deep, and 10 by 10', () => {
  const grid = square({}, 10)
  expect(grid.children.length).toBe(1)
  expect(grid.children[0].children.length).toBe(10)
  expect(grid.children[0].children[0].children.length).toBe(10)
})