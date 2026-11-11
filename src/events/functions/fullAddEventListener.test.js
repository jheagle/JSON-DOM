/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import fullAddEventListener from './fullAddEventListener'
import createDomItem from '../../domItem/objects/createDomItem'

describe('fullAddEventListener', () => {
  test('registers, attaches and binds a listener in one call', () => {
    const clickButton = document.createElement('button')
    const clickFn = jest.fn()
    const domItem = createDomItem({
      nodeName: 'button',
      element: clickButton,
      eventListeners: {}
    })
    domItem.parentItem = createDomItem({
      nodeName: '#document',
      element: document,
      eventActions: {},
      parentItem: {},
      children: [domItem]
    })

    fullAddEventListener('click', clickFn, 'clickFn', undefined, undefined, domItem)

    expect(domItem.parentItem.eventActions.clickFn).toBe(clickFn)
    expect(domItem.eventListeners.click[0].listenerFunc).toBe('clickFn')

    domItem.element.click()
    expect(clickFn).toHaveBeenCalledTimes(1)
  })
})
