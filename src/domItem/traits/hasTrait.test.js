/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import hasTrait from './hasTrait'
import createDomItem from '../objects/createDomItem'
import createCoreItem from '../objects/createCoreItem'

describe('hasTrait', () => {
  test('an item made by createDomItem has the render trait', () => {
    expect(hasTrait(createDomItem(), 'render')).toBe(true)
  })

  test('a core item does not have it', () => {
    expect(hasTrait(createCoreItem(), 'render')).toBe(false)
  })

  test('a trait which is not in the has map is not had', () => {
    expect(hasTrait(createCoreItem(), 'matrix.row')).toBe(false)
  })

  test('an object without a has map (from code which pre-dates traits) has no traits', () => {
    expect(hasTrait({ nodeName: 'div' }, 'render')).toBe(false)
  })

  test('only a true counts', () => {
    const item = createCoreItem({ has: { render: false } })
    expect(hasTrait(item, 'render')).toBe(false)
  })
})
