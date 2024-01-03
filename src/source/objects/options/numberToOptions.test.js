import numberToOptions from './numberToOptions'
import getListenerOptions from './getListenerOptions'

describe('numberToOptions', () => {
  test('converts 0 to all options off', () => {
    expect(numberToOptions(getListenerOptions(), 0)).toEqual({ capture: false, once: false, passive: false, signal: false })
  })

  test('converts 1 to capture enabled', () => {
    expect(numberToOptions(getListenerOptions(), 1)).toEqual({ capture: true, once: false, passive: false, signal: false })
  })

  test('converts 2 to once enabled', () => {
    expect(numberToOptions(getListenerOptions(), 2)).toEqual({ capture: false, once: true, passive: false, signal: false })
  })

  test('converts 3 to capture + once enabled', () => {
    expect(numberToOptions(getListenerOptions(), 3)).toEqual({ capture: true, once: true, passive: false, signal: false })
  })

  test('converts 4 to passive enabled', () => {
    expect(numberToOptions(getListenerOptions(), 4)).toEqual({ capture: false, once: false, passive: true, signal: false })
  })

  test('converts 5 to capture + passive enabled', () => {
    expect(numberToOptions(getListenerOptions(), 5)).toEqual({ capture: true, once: false, passive: true, signal: false })
  })

  test('converts 6 to once + passive enabled', () => {
    expect(numberToOptions(getListenerOptions(), 6)).toEqual({ capture: false, once: true, passive: true, signal: false })
  })

  test('converts 7 to capture + once + passive enabled', () => {
    expect(numberToOptions(getListenerOptions(), 7)).toEqual({ capture: true, once: true, passive: true, signal: false })
  })

  test('converts 8 to signal enabled', () => {
    expect(numberToOptions(getListenerOptions(), 8)).toEqual({ capture: false, once: false, passive: false, signal: true })
  })
})