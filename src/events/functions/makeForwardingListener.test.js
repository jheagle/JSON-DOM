import appendChild from '../../domItem/tree/appendChild'
import createDomItem from '../../domItem/objects/createDomItem'
import makeForwardingListener from './makeForwardingListener'

describe('makeForwardingListener', () => {
  test('sends the transport an envelope built from the item the listener is attached to, when the event has no domItemTarget', () => {
    const root = createDomItem({ nodeName: '#document', parentItem: {} })
    const item = createDomItem({ nodeName: 'button' })
    appendChild(root, item)
    const transport = jest.fn()
    const forwarder = makeForwardingListener('clickFn', transport)
    forwarder(new Event('click'), item, 'extra', 42)
    expect(transport).toHaveBeenCalledWith({
      itemId: item.id,
      eventType: 'click',
      listenerFunc: 'clickFn',
      data: ['extra', 42]
    })
  })

  test('prefers the event\'s own domItemTarget over the item the listener is attached to (delegation)', () => {
    const root = createDomItem({ nodeName: '#document', parentItem: {} })
    const parent = createDomItem({ nodeName: 'ul' })
    const child = createDomItem({ nodeName: 'li' })
    appendChild(root, parent)
    appendChild(parent, child)
    const transport = jest.fn()
    const forwarder = makeForwardingListener('clickFn', transport)
    const eventWithTarget = Object.assign(new Event('click'), { domItemTarget: child })
    forwarder(eventWithTarget, parent)
    expect(transport).toHaveBeenCalledWith(expect.objectContaining({ itemId: child.id }))
  })

  test('returns whatever the transport returns', () => {
    const root = createDomItem({ nodeName: '#document', parentItem: {} })
    const forwarder = makeForwardingListener('clickFn', () => 'transported')
    expect(forwarder(new Event('click'), root)).toBe('transported')
  })

  test('captures a checkbox\'s checked state as targetState, for a listener that reads it off the real event', () => {
    const item = createDomItem({ nodeName: 'input', parentItem: {} })
    const transport = jest.fn()
    const forwarder = makeForwardingListener('checkFn', transport)
    const checkbox = { type: 'change', target: { tagName: 'INPUT', type: 'checkbox', checked: true } }
    forwarder(checkbox, item)
    expect(transport).toHaveBeenCalledWith(expect.objectContaining({ targetState: { checked: true } }))
  })

  test('captures a text input\'s value as targetState', () => {
    const item = createDomItem({ nodeName: 'input', parentItem: {} })
    const transport = jest.fn()
    const forwarder = makeForwardingListener('changeFn', transport)
    const input = { type: 'change', target: { tagName: 'INPUT', type: 'text', value: 'hello' } }
    forwarder(input, item)
    expect(transport).toHaveBeenCalledWith(expect.objectContaining({ targetState: { value: 'hello' } }))
  })

  test('omits targetState for a target that is not a form control, such as a button', () => {
    const item = createDomItem({ nodeName: 'button', parentItem: {} })
    const transport = jest.fn()
    const forwarder = makeForwardingListener('clickFn', transport)
    const button = { type: 'click', target: { tagName: 'BUTTON', value: '' } }
    forwarder(button, item)
    expect(transport.mock.calls[0][0].targetState).toBeUndefined()
  })
})
