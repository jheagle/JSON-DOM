import getListenerOptions from './getListenerOptions'

describe('getListenerOptions', () => {
  test('returns all listener options', () => {
    const results = getListenerOptions()
    expect(Object.keys(results).length).toEqual(4)
    expect(results).toEqual({
      capture: 1,
      once: 2,
      passive: 4,
      signal: 8
    })
  })
})
