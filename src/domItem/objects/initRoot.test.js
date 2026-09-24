/**
 * @jest-environment jsdom
 */
import initRoot from './initRoot'

describe('initRoot', () => {
  test('initializes root correctly', () => {
    const root = initRoot()
    expect(root).toBeInstanceOf(Object)
  })
})
