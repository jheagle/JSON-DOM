/**
 * @jest-environment jsdom
 */
import bindListeners from './bindListeners.js'
import createDomItem from '../objects/createDomItem.js'

describe('bindListeners', () => {
  test('will assign the listeners onto the domItem element', () => {
    const clickButton = document.createElement('button')
    const clickFn = jest.fn()
    const domItem = createDomItem({
      nodeName: 'button',
      element: clickButton,
      eventListeners: { click: [{ listenerFunc: 'clickFn' }] }
    })
    domItem.parentItem = createDomItem({
      nodeName: '#document', element: document, eventListeners: { clickFn: clickFn }, children: [
        domItem
      ],
      parentItem: {}
    })
    bindListeners(domItem)
    domItem.element.click()
    expect(clickFn).toHaveBeenCalledTimes(1)
  })
})
