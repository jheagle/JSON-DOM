/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createDomItem from '../../domItem/objects/createDomItem'
import retrieveListener from './retrieveListener'

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

  test('when forwardEvents is set, resolves any name to a forwarder instead of throwing or looking it up in eventActions', () => {
    const transport = jest.fn()
    const parent = createDomItem({ nodeName: '#document', element: document, eventActions: {}, forwardEvents: transport, parentItem: {} })
    const forwarder = retrieveListener('notRegisteredAnywhere', parent)
    expect(typeof forwarder).toBe('function')
    forwarder(new Event('click'), parent)
    expect(transport).toHaveBeenCalledWith(expect.objectContaining({ listenerFunc: 'notRegisteredAnywhere', eventType: 'click', itemId: parent.id }))
  })
})
