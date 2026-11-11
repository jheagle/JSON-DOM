/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import documentDomItem from '../../domItem/objects/documentDomItem'
import registerListeners from './registerListeners'

describe('registerListeners', () => {
  test('can register listeners', () => {
    const parentItem = documentDomItem()
    const coolFunc = () => 'hello'
    registerListeners({ coolFunc }, parentItem)
    expect(parentItem.eventActions.coolFunc).toBe(coolFunc)
  })
})
