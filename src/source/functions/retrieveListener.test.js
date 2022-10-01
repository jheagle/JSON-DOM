/**
 * @jest-environment jsdom
 */
import 'core-js/stable'
import createDomItem from '../objects/createDomItem.js'
import retrieveListener from './retrieveListener.js'

describe('retrieveListener', () => {
  test('will find the specified event listener', () => {
    const clickButton = document.createElement('button')
    const clickFn = jest.fn()
    const domItem = createDomItem({
      nodeName: 'button',
      element: clickButton,
      eventListeners: { click: { listenerFunc: 'clickFn' } }
    })
    domItem.parentItem = createDomItem({
      nodeName: '#document', element: document, eventListeners: { clickFn: clickFn }, children: [
        domItem
      ]
    })
    const foundListener = retrieveListener('clickFn', domItem.parentItem)
    domItem.element.click()
    expect(foundListener).toBe(clickFn)
  })
})
