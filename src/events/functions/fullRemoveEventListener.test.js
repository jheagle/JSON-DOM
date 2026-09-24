/**
 * @jest-environment jsdom
 */
import fullAddEventListener from './fullAddEventListener.js'
import fullRemoveEventListener from './fullRemoveEventListener.js'
import createDomItem from '../../domItem/objects/createDomItem.js'

describe('fullRemoveEventListener', () => {
  test('removes a listener added via fullAddEventListener, resolving the same registered name', () => {
    const clickButton = document.createElement('button')
    const clickFn = jest.fn()
    const domItem = createDomItem({
      nodeName: 'button',
      element: clickButton,
      eventListeners: {}
    })
    domItem.parentItem = createDomItem({
      nodeName: '#document',
      element: document,
      eventActions: {},
      parentItem: {},
      children: [domItem]
    })

    fullAddEventListener('click', clickFn, 'clickFn', undefined, undefined, domItem)
    domItem.element.click()
    expect(clickFn).toHaveBeenCalledTimes(1)

    const result = fullRemoveEventListener('click', clickFn, 'clickFn', undefined, undefined, domItem)

    expect(result.eventListeners.click.length).toBe(0)
    // the shared eventActions registry entry is left untouched
    expect(result.parentItem.eventActions.clickFn).toBe(clickFn)

    result.element.click()
    expect(clickFn).toHaveBeenCalledTimes(1)
  })

  test('defaults name to listener.name when not provided, matching fullAddEventListener', () => {
    const clickButton = document.createElement('button')
    let callCount = 0
    function namedClickFn () { callCount++ }
    const domItem = createDomItem({
      nodeName: 'button',
      element: clickButton,
      eventListeners: {}
    })
    domItem.parentItem = createDomItem({
      nodeName: '#document',
      element: document,
      eventActions: {},
      parentItem: {},
      children: [domItem]
    })

    fullAddEventListener('click', namedClickFn, undefined, undefined, undefined, domItem)
    expect(domItem.eventListeners.click[0].listenerFunc).toBe('namedClickFn')

    domItem.element.click()
    expect(callCount).toBe(1)

    fullRemoveEventListener('click', namedClickFn, undefined, undefined, undefined, domItem)
    domItem.element.click()
    expect(callCount).toBe(1)
  })
})
