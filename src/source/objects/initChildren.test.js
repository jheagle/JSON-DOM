/**
 * @jest-environment jsdom
 */
import initChildren from './initChildren.js'

describe('initChildren', () => {
  test('initializes children correctly', () => {
    const children = initChildren()
    expect(children).toBeInstanceOf(Array)
  })
})
