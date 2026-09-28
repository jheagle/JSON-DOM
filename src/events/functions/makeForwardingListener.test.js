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
      itemPath: [0],
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
    expect(transport).toHaveBeenCalledWith(expect.objectContaining({ itemPath: [0, 0] }))
  })

  test('returns whatever the transport returns', () => {
    const root = createDomItem({ nodeName: '#document', parentItem: {} })
    const forwarder = makeForwardingListener('clickFn', () => 'transported')
    expect(forwarder(new Event('click'), root)).toBe('transported')
  })
})
