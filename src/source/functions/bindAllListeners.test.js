/**
 * @jest-environment jsdom
 */
import bindAllListeners from './bindAllListeners.js'
import createDomItem from '../objects/createDomItem.js'

describe('bindAllListeners', () => {
  test('will set the listeners all domItem elements and child elements', () => {
    const clickButton = document.createElement('button')
    const parentDiv = document.createElement('div')
    parentDiv.appendChild(clickButton)
    const childItem = createDomItem({
      nodeName: 'button',
      element: clickButton,
      eventListeners: { click: [{ listenerFunc: 'clickFn' }] }
    })
    const parentItem = createDomItem({
      nodeName: 'div',
      element: parentDiv,
    })
    parentItem.appendChild(childItem)
    const clickFn = jest.fn()
    parentItem.parentItem = createDomItem({
      nodeName: '#document', element: document, eventListeners: { clickFn: clickFn }, children: [
        parentItem
      ],
      parentItem: {}
    })
    bindAllListeners(parentItem)
    parentItem.children[0].element.click()
    expect(clickFn).toHaveBeenCalledTimes(1)
  })
})
