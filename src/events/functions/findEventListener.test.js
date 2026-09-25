import findEventListener from './findEventListener'
import createDomItem from '../../domItem/objects/createDomItem'
import createEventListener from '../objects/createEventListener'

describe('findEventListener', () => {
  const eventName = 'click'
  test('will find function with args', () => {
    const item = makeTestEventListeners()
    const func = item.eventListeners[eventName][0].listenerFunc
    const [foundIndex, foundListener] = findEventListener(eventName, func, null, false, item)
    expect(foundIndex).toBe(0)
    expect(foundListener.listenerFunc).toBe(func)
    expect(foundListener.listenerArgs).toEqual({ arg1: 'something' })
    expect(foundListener.listenerActive).toBeTruthy()
  })
  test('will find function with options', () => {
    const item = makeTestEventListeners()
    const func = item.eventListeners[eventName][1].listenerFunc
    const [foundIndex, foundListener] = findEventListener(eventName, func, null, false, item)
    expect(foundIndex).toBe(1)
    expect(foundListener.listenerFunc).toBe(func)
    expect(foundListener.listenerOptions).toEqual({ once: true })
    expect(foundListener.listenerActive).toBeFalsy()
  })
  test('will find string function', () => {
    const item = makeTestEventListeners()
    const func = item.eventListeners[eventName][2].listenerFunc
    const [foundIndex, foundListener] = findEventListener(eventName, func, null, false, item)
    expect(foundIndex).toBe(2)
    expect(foundListener.listenerFunc).toBe(func)
    expect(foundListener.listenerActive).toBeFalsy()
  })
  test('tells a capture listener from a non-capture one which has the same function', () => {
    const func = () => true
    const item = createDomItem()
    item.eventListeners = {
      click: [
        createEventListener({ listenerFunc: func, listenerOptions: { capture: true } }),
        createEventListener({ listenerFunc: func })
      ]
    }
    expect(findEventListener(eventName, func, null, { capture: true }, item)[0]).toBe(0)
    expect(findEventListener(eventName, func, null, false, item)[0]).toBe(1)
    expect(findEventListener(eventName, func, null, undefined, item)[0]).toBe(1)
  })
  test('does not find a capture listener when asked for one which is not capturing, or the other way round', () => {
    const func = () => true
    const captureOnly = createDomItem()
    captureOnly.eventListeners = { click: [createEventListener({ listenerFunc: func, listenerOptions: { capture: true } })] }
    expect(findEventListener(eventName, func, null, false, captureOnly)).toEqual([-1, undefined])
    const plainOnly = createDomItem()
    plainOnly.eventListeners = { click: [createEventListener({ listenerFunc: func })] }
    expect(findEventListener(eventName, func, null, { capture: true }, plainOnly)).toEqual([-1, undefined])
  })
  test('the other options (once, passive) do not change which listener is found', () => {
    const func = () => true
    const item = createDomItem()
    item.eventListeners = { click: [createEventListener({ listenerFunc: func, listenerOptions: { once: true, passive: true } })] }
    expect(findEventListener(eventName, func, null, false, item)[0]).toBe(0)
    expect(findEventListener(eventName, func, null, { passive: false }, item)[0]).toBe(0)
    expect(findEventListener(eventName, func, null, { once: true, capture: false }, item)[0]).toBe(0)
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
