/**
 * @jest-environment jsdom
 */
import revokeActiveListeners from './revokeActiveListeners.js'
import applyActiveListeners from './applyActiveListeners.js'
import activateListener from './activateListener.js'
import createDomItem from '../../domItem/objects/createDomItem.js'

describe('revokeActiveListeners', () => {
  test('will revoke an active click listener from the element', () => {
    const clickFn = jest.fn()
    const eventName = 'click'
    let domItem = createDomItemForEvents()
    domItem = addEventToDomItem(domItem, eventName, 'clickFn', { listenerFunc: clickFn })
    domItem = activateListener(eventName, domItem.eventListeners.click[0], domItem)
    domItem = applyActiveListeners(eventName, domItem)

    domItem.element.dispatchEvent(new Event(eventName))
    expect(clickFn).toHaveBeenCalledTimes(1)

    const result = revokeActiveListeners(eventName, domItem)
    expect(result.activeListeners).not.toHaveProperty(eventName)

    result.element.dispatchEvent(new Event(eventName))
    expect(clickFn).toHaveBeenCalledTimes(1)
  })

  test('will revoke an active click listener with signal true from the element', () => {
    const clickFn = jest.fn()
    const eventName = 'click'
    let domItem = createDomItemForEvents()
    domItem = addEventToDomItem(domItem, eventName, 'clickFn', { listenerFunc: clickFn, listenerOptions: { signal: true } })
    domItem = activateListener(eventName, domItem.eventListeners.click[0], domItem)
    domItem = applyActiveListeners(eventName, domItem)

    domItem.element.dispatchEvent(new Event(eventName))
    expect(clickFn).toHaveBeenCalledTimes(1)

    const result = revokeActiveListeners(eventName, domItem)
    expect(result.activeListeners).not.toHaveProperty(eventName)

    result.element.dispatchEvent(new Event(eventName))
    expect(clickFn).toHaveBeenCalledTimes(1)
  })

  test('will revoke multiple listeners sharing the same options bucket independently', () => {
    const clickFn1 = jest.fn()
    const clickFn2 = jest.fn()
    const eventName = 'click'
    let domItem = createDomItemForEvents()
    domItem = addEventToDomItem(domItem, eventName, 'clickFn1', { listenerFunc: clickFn1 })
    domItem = addEventToDomItem(domItem, eventName, 'clickFn2', { listenerFunc: clickFn2 })
    domItem = activateListener(eventName, domItem.eventListeners.click[0], domItem)
    domItem = activateListener(eventName, domItem.eventListeners.click[1], domItem)
    domItem = applyActiveListeners(eventName, domItem)

    domItem.element.dispatchEvent(new Event(eventName))
    expect(clickFn1).toHaveBeenCalledTimes(1)
    expect(clickFn2).toHaveBeenCalledTimes(1)

    const result = revokeActiveListeners(eventName, domItem)
    expect(result.activeListeners).not.toHaveProperty(eventName)

    result.element.dispatchEvent(new Event(eventName))
    expect(clickFn1).toHaveBeenCalledTimes(1)
    expect(clickFn2).toHaveBeenCalledTimes(1)
  })
})

/**
 *
 * @returns {DomItem}
 */
function createDomItemForEvents () {
  const domItem = createDomItem({
    nodeName: 'button',
    element: document.createElement('button'),
    eventListeners: {}
  })
  domItem.parentItem = createDomItem({
    nodeName: '#document',
    element: document,
    eventListeners: {},
    eventActions: {},
    parentItem: {},
    children: [
      domItem
    ]
  })
  return domItem
}

/**
 *
 * @param {DomItem} domItem
 * @param {EventName} eventType
 * @param {string} funcName
 * @param {EventListener} eventListener
 * @returns {DomItem}
 */
function addEventToDomItem (domItem, eventType, funcName, eventListener) {
  if (!(eventType in domItem.eventListeners)) {
    domItem.eventListeners[eventType] = []
  }
  domItem.parentItem.eventActions[funcName] = eventListener.listenerFunc
  eventListener.listenerFunc = funcName
  domItem.eventListeners[eventType].push(eventListener)
  return domItem
}
