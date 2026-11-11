/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import bindAllListeners from './bindAllListeners'
import createDomItem from '../../domItem/objects/createDomItem'

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
      element: parentDiv
    })
    parentItem.appendChild(childItem)
    const clickFn = jest.fn()
    parentItem.parentItem = createDomItem({
      nodeName: '#document',
      element: document,
      eventActions: { clickFn },
      children: [
        parentItem
      ],
      parentItem: {}
    })
    bindAllListeners(parentItem)
    parentItem.children[0].element.click()
    expect(clickFn).toHaveBeenCalledTimes(1)
  })
})
