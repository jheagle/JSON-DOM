/**
 * @jest-environment jsdom
 */
import initChildren from './initChildren'

describe('initChildren', () => {
  test('initializes children correctly', () => {
    const children = initChildren()
    expect(children).toBeInstanceOf(Array)
  })
})
