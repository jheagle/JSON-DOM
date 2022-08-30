/**
 * @jest-environment jsdom
 */
import listenerOptions from './listenerOptions'

describe('listenerOptions', () => {
  test('will use provided options when supported', () => {
    const options = { capture: false, once: false, passive: false }
    const result = listenerOptions(options)
    expect(result).toEqual(options)
    expect(listenerOptions.supportsOptions).toBe(true)
  })
})