/**
 * @jest-environment jsdom
 */
import bindElementListeners from './bindElementListeners.js'
import createDomItem from '../objects/createDomItem'

describe('bindElementListeners', () => {
  test('will assign the listeners onto the domItem element', () => {
    const clickButton = document.createElement('button')
    const clickFn = jest.fn()
    const domItem = createDomItem({ nodeName: 'button', element: clickButton, eventListeners: { click: { listenerFunc: () => clickFn() } } })
    bindElementListeners(domItem)
    domItem.element.click()
    expect(clickFn).toHaveBeenCalledTimes(1)
  })
})
