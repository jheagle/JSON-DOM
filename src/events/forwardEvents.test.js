/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import bindAllListeners from './functions/bindAllListeners'
import createDomItem from '../domItem/objects/createDomItem'
import setForwardEvents from './functions/setForwardEvents'

describe('render-only event forwarding (end to end)', () => {
  test('a click on a bound item is forwarded instead of run locally, with no eventActions registered at all', () => {
    const clickButton = document.createElement('button')
    const parentDiv = document.createElement('div')
    parentDiv.appendChild(clickButton)
    const childItem = createDomItem({
      nodeName: 'button',
      element: clickButton,
      eventListeners: { click: [{ listenerFunc: 'clickFn', listenerArgs: { custom: 'arg' } }] }
    })
    const parentItem = createDomItem({
      nodeName: 'div',
      element: parentDiv
    })
    parentItem.appendChild(childItem)
    const transport = jest.fn()
    parentItem.parentItem = createDomItem({
      nodeName: '#document',
      element: document,
      // No eventActions at all - forwardEvents means retrieveListener never needs a local function.
      children: [parentItem],
      parentItem: {}
    })
    setForwardEvents(transport, parentItem.parentItem)
    bindAllListeners(parentItem)
    parentItem.children[0].element.click()
    expect(transport).toHaveBeenCalledTimes(1)
    expect(transport).toHaveBeenCalledWith({
      itemId: childItem.id,
      eventType: 'click',
      listenerFunc: 'clickFn',
      data: [{ custom: 'arg' }],
      targetState: undefined
    })
  })
})
