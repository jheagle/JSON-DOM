/**
 * @jest-environment jsdom
 */
import bindAllListeners from './bindAllListeners.js'
import createDomItem from '../objects/createDomItem'

describe('bindAllListeners', () => {
  test('will set the listeners all domItem elements and child elements', () => {
    const clickButton = document.createElement('button')
    const parentDiv = document.createElement('div')
    parentDiv.appendChild(clickButton)
    const parentItem = createDomItem({
      nodeName: 'div',
      element: parentDiv,
      children: [
        createDomItem({ nodeName: 'button', element: clickButton, eventListeners: { click: { listenerFunc: () => clickFn() } } })
      ]
    })
    const clickFn = jest.fn()
    bindAllListeners(parentItem)
    parentItem.children[0].element.click()
    expect(clickFn).toHaveBeenCalledTimes(1)
  })
})
