import createEventProxy from './createEventProxy'

describe('createEventProxy', () => {
  test('has flag for immediate propagation stopped', () => {
    const proxyEvent = createEventProxy(new Event('click'))
    expect(proxyEvent).toHaveProperty('immediatePropagationStopped', false)
    proxyEvent.stopImmediatePropagation()
    expect(proxyEvent.immediatePropagationStopped).toBeTruthy()
  })

  test('event methods and accessors still work through the proxy', () => {
    const proxyEvent = createEventProxy(new Event('click', { cancelable: true }))
    expect(proxyEvent.type).toBe('click')
    expect(proxyEvent.defaultPrevented).toBe(false)
    proxyEvent.preventDefault()
    expect(proxyEvent.defaultPrevented).toBe(true)
    expect(proxyEvent.constructor).toBe(Event)
  })
})
