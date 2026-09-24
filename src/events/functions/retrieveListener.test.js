/**
 * @jest-environment jsdom
 */
import 'core-js/stable'
import createDomItem from '../../domItem/objects/createDomItem.js'
import retrieveListener from './retrieveListener.js'

describe('retrieveListener', () => {
  test('will find the specified event listener', () => {
    const clickButton = document.createElement('button')
    const clickFn = jest.fn()
    const domItem = createDomItem({
      nodeName: 'button',
      element: clickButton,
      eventListeners: { click: [{ listenerFunc: 'clickFn' }] }
    })
    domItem.parentItem = createDomItem({
      nodeName: '#document',
      element: document,
      eventActions: { clickFn },
      children: [
        domItem
      ]
    })
    const foundListener = retrieveListener('clickFn', domItem.parentItem)
    domItem.element.click()
    expect(foundListener).toBe(clickFn)
  })

  test('will return a raw function as-is, without looking it up in eventActions', () => {
    const rawFn = () => {}
    const parent = createDomItem({ nodeName: '#document', element: document, eventActions: {} })
    expect(retrieveListener(rawFn, parent)).toBe(rawFn)
  })

  test('will throw for an unregistered listener name', () => {
    const parent = createDomItem({ nodeName: '#document', element: document, eventActions: {} })
    expect(() => retrieveListener('missingFn', parent)).toThrow(
      'Undefined listener function on this DomItemRoot: missingFn'
    )
  })
})
