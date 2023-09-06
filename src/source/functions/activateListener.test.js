/**
 * @jest-environment jsdom
 */
import activateListener from './activateListener'
import createDomItem from '../objects/createDomItem'
import { logObject } from 'js-build-tools/dist/testHelpers'

describe('activateListener', () => {
  test('Active listeners get added', () => {
    const clickFn = jest.fn()
    const eventName = 'click'
    let domItem = createDomItemForEvents()
    domItem = addEventToDomItem(domItem, eventName, 'clickFn', { listenerFunc: clickFn })
    expect(domItem).not.toHaveProperty('activeListeners')
    const result = activateListener(domItem, eventName, domItem.eventListeners.click[0])
    expect(result).toHaveProperty('activeListeners')
    expect(result.activeListeners).toHaveProperty(eventName)
    expect(result.activeListeners.click).toHaveProperty('0')
    expect(result.activeListeners.click['0'].length).toBe(1)
    result.activeListeners.click['0'][0]['handler'](new Event(eventName))
    expect(clickFn).toHaveBeenCalled()
  })

  // TODO: Add more tests:
  // Test passing different arguments and options into the eventListener
  // Test assigning multiple event listeners to the same event name (ex multiple 'click')
  // The expectation is that each function will be applied to active listeners. An object for each event name keyed by derived option value
  // With an array of handlers to be called (one for each event listener attached)
 })

/**
 *
 * @returns {DomItem}
 */
function createDomItemForEvents () {
  const domItem = createDomItem({
    nodeName: 'button',
    element:  document.createElement('button'),
    eventListeners: {}
  })
  domItem.parentItem = createDomItem({
    nodeName: '#document',
    element: document,
    eventListeners: {},
    parentItem: {},
    children: [
      domItem
    ],
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
  domItem.parentItem.eventListeners[funcName] = eventListener.listenerFunc
  eventListener.listenerFunc = funcName
  domItem.eventListeners[eventType].push(eventListener)
  return domItem
}
