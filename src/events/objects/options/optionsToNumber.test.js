import optionsToNumber from './optionsToNumber'
import getListenerOptions from './getListenerOptions'

describe('optionsToNumber', () => {
  test('converts all options off to 0', () => {
    expect(optionsToNumber(getListenerOptions(), false)).toBe(0)
    expect(optionsToNumber(getListenerOptions(), { capture: false, once: false, passive: false, signal: false })).toBe(0)
  })

  test('converts capture enabled to 1', () => {
    expect(optionsToNumber(getListenerOptions(), { capture: true, once: false, passive: false, signal: false })).toBe(1)
  })

  test('converts once enabled to 2', () => {
    expect(optionsToNumber(getListenerOptions(), { capture: false, once: true, passive: false, signal: false })).toBe(2)
  })

  test('converts capture + once enabled to 3', () => {
    expect(optionsToNumber(getListenerOptions(), { capture: true, once: true, passive: false, signal: false })).toBe(3)
  })

  test('converts passive enabled to 4', () => {
    expect(optionsToNumber(getListenerOptions(), { capture: false, once: false, passive: true, signal: false })).toBe(4)
  })

  test('converts capture + passive enabled to 5', () => {
    expect(optionsToNumber(getListenerOptions(), { capture: true, once: false, passive: true, signal: false })).toBe(5)
  })

  test('converts once + passive enabled to 6', () => {
    expect(optionsToNumber(getListenerOptions(), { capture: false, once: true, passive: true, signal: false })).toBe(6)
  })

  test('converts capture + once + passive enabled to 7', () => {
    expect(optionsToNumber(getListenerOptions(), { capture: true, once: true, passive: true, signal: false })).toBe(7)
  })

  test('converts signal enabled to 8', () => {
    expect(optionsToNumber(getListenerOptions(), { capture: false, once: false, passive: false, signal: true })).toBe(8)
  })
})
