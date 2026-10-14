/**
 * @jest-environment jsdom
 */
import activateListener from './activateListener'
import createDomItem from '../../domItem/objects/createDomItem'
import createEventListener from '../objects/createEventListener'
import optionsToNumber from '../objects/options/optionsToNumber'
import getListenerOptions from '../objects/options/getListenerOptions'

describe('activateListener', () => {
  test('Active listeners get added', () => {
    const clickFn = jest.fn()
    const eventName = 'click'
    let domItem = createDomItemForEvents()
    domItem = addEventToDomItem(domItem, eventName, 'clickFn', { listenerFunc: clickFn })
    expect(domItem).not.toHaveProperty('activeListeners')
    const result = activateListener(eventName, domItem.eventListeners.click[0], domItem)
    expect(result).toHaveProperty('activeListeners')
    expect(result.activeListeners).toHaveProperty(eventName)
    expect(result.activeListeners.click).toHaveProperty('0')
    expect(result.activeListeners.click['0'].length).toBe(1)
    result.activeListeners.click['0'][0].handler(new Event(eventName))
    expect(clickFn).toHaveBeenCalled()
  })

  test('Activate listeners with options', () => {
    const clickFn = jest.fn()
    const eventName = 'click'
    let domItem = createDomItemForEvents()
    const options = { capture: true, once: true }
    domItem = addEventToDomItem(domItem, eventName, 'clickFn', { listenerFunc: clickFn, listenerOptions: options })
    const result = activateListener(eventName, domItem.eventListeners.click[0], domItem)
    expect(result).toHaveProperty('activeListeners')
    expect(result.activeListeners).toHaveProperty(eventName)
    const optionIndex = '' + optionsToNumber(getListenerOptions(), options) + ''
    expect(result.activeListeners.click).toHaveProperty(optionIndex)
    expect(result.activeListeners.click[optionIndex].length).toBe(1)
    result.activeListeners.click[optionIndex][0].handler(new Event(eventName))
    expect(clickFn).toHaveBeenCalled()
  })

  test('Activate listeners with arguments', () => {
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
    const result = activateListener(eventName, domItem.eventListeners.click[0], domItem)
    expect(result).toHaveProperty('activeListeners')
    expect(result.activeListeners).toHaveProperty(eventName)
    const optionIndex = '0'
    expect(result.activeListeners.click).toHaveProperty(optionIndex)
    expect(result.activeListeners.click[optionIndex].length).toBe(1)
    const clickEvent = new Event(eventName)
    result.activeListeners.click[optionIndex][0].handler(clickEvent)
    expect(clickFn).toHaveBeenCalledWith(clickEvent, domItem, listenerArguments)
  })

  test('Activate multiple listeners for same event', () => {
    const eventName = 'click'
    let domItem = createDomItemForEvents()
    const clickFunctions = {}
    const eventCount = 3
    const optionIndex = '0'
    for (let i = 0; i < eventCount; ++i) {
      const name = `clickFn${i}`
      const newFunc = jest.fn()
      clickFunctions[name] = newFunc
      domItem = addEventToDomItem(domItem, eventName, name, { listenerFunc: newFunc })
      domItem = activateListener(eventName, domItem.eventListeners.click[i], domItem)
    }

    expect(domItem).toHaveProperty('activeListeners')
    expect(domItem.activeListeners).toHaveProperty(eventName)
    expect(domItem.activeListeners.click[optionIndex].length).toBe(eventCount)

    for (let i = 0; i < eventCount; ++i) {
      const name = `clickFn${i}`
      const clickEvent = new Event(eventName)
      domItem.activeListeners.click[optionIndex][i].handler(clickEvent)
      expect(clickFunctions[name]).toHaveBeenCalled()
    }
  })

  test('Activates a listener attached as a raw function, without a registered name', () => {
    const clickFn = jest.fn()
    const eventName = 'click'
    const domItem = createDomItemForEvents()
    domItem.eventListeners.click = [createEventListener({ listenerFunc: clickFn })]
    const result = activateListener(eventName, domItem.eventListeners.click[0], domItem)
    result.activeListeners.click['0'][0].handler(new Event(eventName))
    expect(clickFn).toHaveBeenCalled()
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
