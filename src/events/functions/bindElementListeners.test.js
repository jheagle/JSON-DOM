/**
 * @jest-environment jsdom
 */
import bindElementListeners from './bindElementListeners.js'
import createDomItem from '../../domItem/objects/createDomItem.js'

describe('bindElementListeners', () => {
  test('will assign the listeners onto the domItem element', () => {
    const clickButton = document.createElement('button')
    const clickFn = jest.fn()
    const domItem = createDomItem({
      nodeName: 'button',
      element: clickButton,
      eventListeners: { click: [{ listenerFunc: 'clickFn', listenerOptions: { capture: true, once: true, signal: true } }] }
    })
    domItem.parentItem = createDomItem({
      nodeName: '#document',
      element: document,
      eventActions: { clickFn },
      children: [
        domItem
      ],
      parentItem: {}
    })
    bindElementListeners(domItem)
    domItem.element.click()
    expect(clickFn).toHaveBeenCalledTimes(1)
  })
})
