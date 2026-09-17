/**
 * @jest-environment jsdom
 */
import createEventListener from './createEventListener'

describe('createEventListener', () => {
  test('will default all required properties', () => {
    const eventListener = createEventListener()
    expect(eventListener).toHaveProperty('listenerFunc')
    expect(eventListener).toHaveProperty('listenerArgs')
    expect(eventListener).toHaveProperty('listenerOptions')
    expect(eventListener).toHaveProperty('listenerActive')
  })
})
