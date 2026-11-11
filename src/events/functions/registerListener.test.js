/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import documentDomItem from '../../domItem/objects/documentDomItem'
import registerListener from './registerListener'

describe('registerListener', () => {
  test('can register a listener', () => {
    const parentItem = documentDomItem()
    const coolFunc = () => 'hello'
    registerListener(coolFunc, 'coolFunc', parentItem)
    expect(parentItem.eventActions.coolFunc).toBe(coolFunc)
  })
})
