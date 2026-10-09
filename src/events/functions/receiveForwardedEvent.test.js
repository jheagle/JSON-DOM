/**
 * @jest-environment jsdom
 */
import bindAllListeners from './bindAllListeners'
import createDomItem from '../../domItem/objects/createDomItem'
import receiveForwardedEvent from './receiveForwardedEvent'
import { registerItemIds } from '../../domItem/tree/itemIdIndex'

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
    registerItemIds(root)

    receiveForwardedEvent(root, { itemId: button.id, eventType: 'click', listenerFunc: 'clickFn', data: [] })

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
    registerItemIds(root)

    receiveForwardedEvent(root, { itemId: checkbox.id, eventType: 'change', listenerFunc: 'checkFn', data: [], targetState: { checked: true } })

    expect(checkbox.element.checked).toBe(true)
    expect(checkFn).toHaveBeenCalledWith(true)
  })

  test('throws when the resolved item has no element', () => {
    const item = createDomItem({ nodeName: 'div' })
    const root = createDomItem({ nodeName: '#document', element: document, eventActions: {}, children: [item], parentItem: {} })
    item.parentItem = root
    registerItemIds(root)

    expect(() => receiveForwardedEvent(root, { itemId: item.id, eventType: 'click', listenerFunc: 'whatever', data: [] })).toThrow(/no element/i)
  })

  test('throws when the id does not resolve to any item in this tree', () => {
    const root = createDomItem({ nodeName: '#document', element: document, eventActions: {}, children: [], parentItem: {} })
    registerItemIds(root)

    expect(() => receiveForwardedEvent(root, { itemId: -1, eventType: 'click', listenerFunc: 'whatever', data: [] })).toThrow(/no item with id/i)
  })

  test('never dispatches when a validator rejects the resolved item', () => {
    const clickFn = jest.fn()
    const button = createDomItem({
      nodeName: 'button',
      element: document.createElement('button'),
      eventListeners: { click: [{ listenerFunc: 'clickFn' }] }
    })
    const root = createDomItem({ nodeName: '#document', element: document, eventActions: { clickFn }, children: [button], parentItem: {} })
    button.parentItem = root
    bindAllListeners(button)
    registerItemIds(root)

    receiveForwardedEvent(root, { itemId: button.id, eventType: 'click', listenerFunc: 'clickFn', data: [] }, () => false)

    expect(clickFn).not.toHaveBeenCalled()
  })

  test('dispatches as normal when a validator accepts the resolved item', () => {
    const clickFn = jest.fn()
    const button = createDomItem({
      nodeName: 'button',
      element: document.createElement('button'),
      eventListeners: { click: [{ listenerFunc: 'clickFn' }] }
    })
    const root = createDomItem({ nodeName: '#document', element: document, eventActions: { clickFn }, children: [button], parentItem: {} })
    button.parentItem = root
    bindAllListeners(button)
    registerItemIds(root)

    const envelope = { itemId: button.id, eventType: 'click', listenerFunc: 'clickFn', data: [] }
    const validator = jest.fn().mockReturnValue(true)
    receiveForwardedEvent(root, envelope, validator)

    expect(validator).toHaveBeenCalledWith(button, envelope)
    expect(clickFn).toHaveBeenCalledTimes(1)
  })
})
