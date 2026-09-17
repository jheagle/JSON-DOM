import findEventListener from './findEventListener.js'
import createDomItem from '../../general/objects/createDomItem.js'
import createEventListener from '../objects/createEventListener.js'

describe('findEventListener', () => {
  const eventName = 'click'
  test('will find function with args', () => {
    const item = makeTestEventListeners()
    const func = item.eventListeners[eventName][0].listenerFunc
    const [foundIndex, foundListener] = findEventListener(item, eventName, func)
    expect(foundIndex).toBe(0)
    expect(foundListener.listenerFunc).toBe(func)
    expect(foundListener.listenerArgs).toEqual({ arg1: 'something' })
    expect(foundListener.listenerActive).toBeTruthy()
  })
  test('will find function with options', () => {
    const item = makeTestEventListeners()
    const func = item.eventListeners[eventName][1].listenerFunc
    const [foundIndex, foundListener] = findEventListener(item, eventName, func)
    expect(foundIndex).toBe(1)
    expect(foundListener.listenerFunc).toBe(func)
    expect(foundListener.listenerOptions).toEqual({ once: true })
    expect(foundListener.listenerActive).toBeFalsy()
  })
  test('will find string function', () => {
    const item = makeTestEventListeners()
    const func = item.eventListeners[eventName][2].listenerFunc
    const [foundIndex, foundListener] = findEventListener(item, eventName, func)
    expect(foundIndex).toBe(2)
    expect(foundListener.listenerFunc).toBe(func)
    expect(foundListener.listenerActive).toBeFalsy()
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
