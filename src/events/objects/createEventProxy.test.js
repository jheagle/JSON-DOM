import createEventProxy from './createEventProxy'

describe('createEventProxy', () => {
  test('has flag for immediate propagation stopped', () => {
    const proxyEvent = createEventProxy(new Event('click'))
    expect(proxyEvent).toHaveProperty('immediatePropagationStopped', false)
    proxyEvent.stopImmediatePropagation()
    expect(proxyEvent.immediatePropagationStopped).toBeTruthy()
  })
})
