/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createDomItem from '../../domItem/objects/createDomItem'
import makeEventHandler from './makeEventHandler'

describe('makeEventHandler', () => {
  test('will create an event handler function', () => {
    const listener = jest.fn()
    const divItem = createDomItem()
    const eventHandler = makeEventHandler(listener, divItem)
    expect(typeof eventHandler).toBe('function')
  })
})
