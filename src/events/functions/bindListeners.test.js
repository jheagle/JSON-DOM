/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import bindListeners from './bindListeners'
import createDomItem from '../../domItem/objects/createDomItem'

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
      nodeName: '#document',
      element: document,
      eventActions: { clickFn },
      children: [
        domItem
      ],
      parentItem: {}
    })
    bindListeners(domItem)
    domItem.element.click()
    expect(clickFn).toHaveBeenCalledTimes(1)
  })
})
