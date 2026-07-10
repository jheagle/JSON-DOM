import createEventResponder from './createEventResponder'

describe('createEventResponder', () => {
  test('has flag for immediate propagation stopped', () => {
    const responderEvent = createEventResponder(() => {}, true)
    expect(responderEvent).toHaveProperty('handler')
    expect(responderEvent).toHaveProperty('abort')
  })
})
