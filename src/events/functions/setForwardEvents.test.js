/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import documentDomItem from '../../domItem/objects/documentDomItem'
import setForwardEvents from './setForwardEvents'

describe('setForwardEvents', () => {
  test('sets forwardEvents on the given root item', () => {
    const parentItem = documentDomItem()
    const transport = () => {}
    setForwardEvents(transport, parentItem)
    expect(parentItem.forwardEvents).toBe(transport)
  })

  test('returns the root item', () => {
    const parentItem = documentDomItem()
    const transport = () => {}
    expect(setForwardEvents(transport, parentItem)).toBe(parentItem)
  })
})
