/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import hasTraits from './hasTraits'
import withTrait from './withTrait'
import defineTrait from './defineTrait'
import createDomItem from '../objects/createDomItem'
import createCoreItem from '../objects/createCoreItem'

describe('hasTraits', () => {
  test('is true when the item has every one of them', () => {
    defineTrait('test.pair.a', { keys: ['a'] })
    defineTrait('test.pair.b', { keys: ['b'] })
    const item = withTrait(withTrait(createDomItem(), 'test.pair.a', { a: 1 }), 'test.pair.b', { b: 2 })
    expect(hasTraits(item, 'render', 'test.pair.a', 'test.pair.b')).toBe(true)
  })

  test('is false when even one of them is missing', () => {
    const item = createDomItem()
    expect(hasTraits(item, 'render', 'test.pair.missing')).toBe(false)
    expect(hasTraits(createCoreItem(), 'render')).toBe(false)
  })

  test('is true when there is nothing to check for', () => {
    expect(hasTraits(createCoreItem())).toBe(true)
  })
})
