/**
 * @jest-environment jsdom
 */
import fullAddEventListener from './fullAddEventListener.js'
import createDomItem from '../../domItem/objects/createDomItem.js'

describe('fullAddEventListener', () => {
  test('registers, attaches and binds a listener in one call', () => {
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

    expect(domItem.parentItem.eventActions.clickFn).toBe(clickFn)
    expect(domItem.eventListeners.click[0].listenerFunc).toBe('clickFn')

    domItem.element.click()
    expect(clickFn).toHaveBeenCalledTimes(1)
  })
})
