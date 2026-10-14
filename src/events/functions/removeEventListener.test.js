/**
 * @jest-environment jsdom
 */
import removeEventListener from './removeEventListener'
import activateListener from './activateListener'
import createDomItem from '../../domItem/objects/createDomItem'
import createEventListener from '../objects/createEventListener'

describe('removeEventListener', () => {
  const eventName = 'click'
  test('will remove an active listener with args and clean up its active state', () => {
    const clickFn = jest.fn()
    const item = createDomItem({
      nodeName: 'button',
      element: document.createElement('button'),
      eventListeners: {
        click: [
          createEventListener({ listenerFunc: 'clickFn', listenerArgs: { arg1: 'something' }, listenerActive: true })
        ]
      }
    })
    item.parentItem = createDomItem({
      nodeName: '#document',
      element: document,
      eventActions: { clickFn },
      parentItem: {},
      children: [item]
    })
    activateListener(eventName, item.eventListeners[eventName][0], item)
    expect(item.activeListeners[eventName]['0'].length).toBe(1)

    const updatedItem = removeEventListener(eventName, 'clickFn', item.eventListeners[eventName][0].listenerArgs, undefined, item)
    expect(updatedItem.eventListeners[eventName].length).toBe(0)
    expect(updatedItem.activeListeners[eventName]).not.toHaveProperty('0')
  })
  test('will remove function with options', () => {
    const item = makeTestEventListeners()
    const func0 = item.eventListeners[eventName][0].listenerFunc
    const func1 = item.eventListeners[eventName][1].listenerFunc
    const func2 = item.eventListeners[eventName][2].listenerFunc
    const updatedItem = removeEventListener(eventName, func1, null, { once: true }, item)
    const clickListeners = updatedItem.eventListeners[eventName]
    expect(clickListeners.length).toBe(2)
    expect(clickListeners[0].listenerFunc).toBe(func0)
    expect(clickListeners[1].listenerFunc).toBe(func2)
  })
  test('removes only the listener whose capture flag matches, when the same function is registered both ways', () => {
    const func = () => true
    const item = createDomItem()
    item.eventListeners = {
      click: [
        createEventListener({ listenerFunc: func, listenerOptions: { capture: true } }),
        createEventListener({ listenerFunc: func })
      ]
    }
    removeEventListener(eventName, func, null, { capture: true }, item)
    expect(item.eventListeners[eventName].length).toBe(1)
    expect(item.eventListeners[eventName][0].listenerOptions).toBe(false)
    removeEventListener(eventName, func, null, false, item)
    expect(item.eventListeners[eventName].length).toBe(0)
  })
  test('will remove string function', () => {
    const item = makeTestEventListeners()
    const func0 = item.eventListeners[eventName][0].listenerFunc
    const func1 = item.eventListeners[eventName][1].listenerFunc
    const func2 = item.eventListeners[eventName][2].listenerFunc
    const updatedItem = removeEventListener(eventName, func2, undefined, undefined, item)
    const clickListeners = updatedItem.eventListeners[eventName]
    expect(clickListeners.length).toBe(2)
    expect(clickListeners[0].listenerFunc).toBe(func0)
    expect(clickListeners[1].listenerFunc).toBe(func1)
  })
})

const makeTestEventListeners = () => {
  const item = createDomItem()
  const otherFunction = () => false
  const testFunction = () => true
  const stringFunction = 'someFunction'
  item.eventListeners = {
    click: [
      createEventListener({
        listenerFunc: otherFunction,
        listenerArgs: { arg1: 'something' },
        listenerActive: true
      }),
      createEventListener({
        listenerFunc: testFunction,
        listenerOptions: { once: true },
        listenerActive: false
      }),
      createEventListener({
        listenerFunc: stringFunction,
        listenerActive: false
      })
    ]
  }
  return item
}
