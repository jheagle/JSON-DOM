/**
 * @jest-environment jsdom
 */
import bindAllListeners from './bindAllListeners'
import createDomItem from '../../domItem/objects/createDomItem'
import receiveForwardedEvent from './receiveForwardedEvent'

describe('receiveForwardedEvent (end to end)', () => {
  test('dispatches a real event on the resolved item, running its real, already-bound listener', () => {
    const clickFn = jest.fn()
    const button = createDomItem({
      nodeName: 'button',
      element: document.createElement('button'),
      eventListeners: { click: [{ listenerFunc: 'clickFn', listenerArgs: { custom: 'arg' } }] }
    })
    const parentDiv = document.createElement('div')
    parentDiv.appendChild(button.element)
    const parent = createDomItem({ nodeName: 'div', element: parentDiv, children: [button] })
    const root = createDomItem({
      nodeName: '#document',
      element: document,
      eventActions: { clickFn },
      children: [parent],
      parentItem: {}
    })
    parent.parentItem = root
    button.parentItem = parent
    bindAllListeners(parent)

    receiveForwardedEvent(root, { itemPath: [0, 0], eventType: 'click', listenerFunc: 'clickFn', data: [] })

    expect(clickFn).toHaveBeenCalledTimes(1)
    const [event, target, customArg] = clickFn.mock.calls[0]
    expect(event.type).toBe('click')
    expect(target).toBe(button)
    expect(customArg).toEqual({ custom: 'arg' })
  })

  test('replays targetState onto the resolved element before dispatching, for a listener that reads it', () => {
    const checkFn = jest.fn()
    const checkbox = createDomItem({
      nodeName: 'input',
      element: document.createElement('input'),
      eventListeners: { change: [{ listenerFunc: 'checkFn' }] }
    })
    const root = createDomItem({
      nodeName: '#document',
      element: document,
      eventActions: { checkFn: (e) => checkFn((e.target).checked) },
      children: [checkbox],
      parentItem: {}
    })
    checkbox.parentItem = root
    bindAllListeners(checkbox)

    receiveForwardedEvent(root, { itemPath: [0], eventType: 'change', listenerFunc: 'checkFn', data: [], targetState: { checked: true } })

    expect(checkbox.element.checked).toBe(true)
    expect(checkFn).toHaveBeenCalledWith(true)
  })

  test('throws when the resolved item has no element', () => {
    const item = createDomItem({ nodeName: 'div' })
    const root = createDomItem({ nodeName: '#document', element: document, eventActions: {}, children: [item], parentItem: {} })
    item.parentItem = root

    expect(() => receiveForwardedEvent(root, { itemPath: [0], eventType: 'click', listenerFunc: 'whatever', data: [] })).toThrow(/no element/i)
  })
})
