/**
 * @jest-environment jsdom
 */
import activateListener from './activateListener.js'
import deactivateListener from './deactivateListener.js'
import applyActiveListeners from './applyActiveListeners.js'
import createDomItem from '../../general/objects/createDomItem.js'
import optionsToNumber from '../objects/options/optionsToNumber.js'
import getListenerOptions from '../objects/options/getListenerOptions.js'
import siFunciona from 'si-funciona'

describe('deactivateListener', () => {
  test('Active listeners get removed', () => {
    const clickFn = jest.fn()
    const eventName = 'click'
    let domItem = createDomItemForEvents()
    domItem = addEventToDomItem(domItem, eventName, 'clickFn', { listenerFunc: clickFn })
    expect(domItem).not.toHaveProperty('activeListeners')
    domItem = activateListener(domItem, eventName, domItem.eventListeners.click[0])
    expect(domItem.activeListeners.click['0'].length).toBe(1)
    domItem.activeListeners.click['0'][0].handler(new Event(eventName))
    expect(clickFn).toHaveBeenCalled()
    const result = deactivateListener(domItem, eventName, domItem.eventListeners.click[0])
    expect(siFunciona.emptyObject(result.activeListeners.click)).toBeTruthy()
  })

  test('Deactivate listeners with options', () => {
    const clickFn = jest.fn()
    const eventName = 'click'
    let domItem = createDomItemForEvents()
    const options = { capture: true, once: true }
    domItem = addEventToDomItem(domItem, eventName, 'clickFn', { listenerFunc: clickFn, listenerOptions: options })
    domItem = activateListener(domItem, eventName, domItem.eventListeners.click[0])
    const optionIndex = '' + optionsToNumber(getListenerOptions(), options) + ''
    expect(domItem.activeListeners.click[optionIndex].length).toBe(1)
    domItem.activeListeners.click[optionIndex][0].handler(new Event(eventName))
    expect(clickFn).toHaveBeenCalled()
    const result = deactivateListener(domItem, eventName, domItem.eventListeners.click[0])
    expect(siFunciona.emptyObject(result.activeListeners.click)).toBeTruthy()
  })

  test('Deactivate listeners with arguments', () => {
    const clickFn = jest.fn()

    const eventName = 'click'
    let domItem = createDomItemForEvents()
    const listenerArguments = [
      'something',
      'was called'
    ]
    domItem = addEventToDomItem(domItem, eventName, 'clickFn', {
      listenerFunc: clickFn,
      listenerArgs: listenerArguments
    })
    domItem = activateListener(domItem, eventName, domItem.eventListeners.click[0])
    const optionIndex = '0'
    expect(domItem.activeListeners.click[optionIndex].length).toBe(1)
    const clickEvent = new Event(eventName)
    domItem.activeListeners.click[optionIndex][0].handler(clickEvent)
    expect(clickFn).toHaveBeenCalledWith(clickEvent, domItem, listenerArguments)
    const result = deactivateListener(domItem, eventName, domItem.eventListeners.click[0])
    expect(siFunciona.emptyObject(result.activeListeners.click)).toBeTruthy()
  })

  test('Deactivate one listener from the element without disturbing a sibling in the same options bucket', () => {
    const clickFn1 = jest.fn()
    const clickFn2 = jest.fn()
    const eventName = 'click'
    let domItem = createDomItemForEvents()
    domItem = addEventToDomItem(domItem, eventName, 'clickFn1', { listenerFunc: clickFn1 })
    domItem = addEventToDomItem(domItem, eventName, 'clickFn2', { listenerFunc: clickFn2 })
    domItem = activateListener(domItem, eventName, domItem.eventListeners.click[0])
    domItem = activateListener(domItem, eventName, domItem.eventListeners.click[1])
    domItem = applyActiveListeners(domItem, eventName)

    domItem.element.dispatchEvent(new Event(eventName))
    expect(clickFn1).toHaveBeenCalledTimes(1)
    expect(clickFn2).toHaveBeenCalledTimes(1)

    const result = deactivateListener(domItem, eventName, domItem.eventListeners.click[0])
    expect(result.activeListeners.click['0'].length).toBe(1)
    expect(domItem.eventListeners.click[0].activeResponder).toBeNull()
    expect(domItem.eventListeners.click[0].listenerActive).toBe(false)

    result.element.dispatchEvent(new Event(eventName))
    expect(clickFn1).toHaveBeenCalledTimes(1)
    expect(clickFn2).toHaveBeenCalledTimes(2)
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
