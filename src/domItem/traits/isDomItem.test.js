/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import isDomItem from './isDomItem'
import createDomItem from '../objects/createDomItem'
import createCoreItem from '../objects/createCoreItem'

describe('isDomItem', () => {
  test('a tree made only of items with the render trait is a DomItem', () => {
    const tree = createDomItem({ children: [createDomItem({ children: [createDomItem()] }), createDomItem()] })
    expect(isDomItem(tree)).toBe(true)
  })

  test('a core item is not', () => {
    expect(isDomItem(createCoreItem())).toBe(false)
  })

  test('one item with the render trait is not enough when something below it lacks it', () => {
    const tree = createDomItem({ children: [createDomItem(), createDomItem({ children: [createCoreItem()] })] })
    expect(isDomItem(tree)).toBe(false)
  })

  test('an item with no children is checked on its own', () => {
    expect(isDomItem(createDomItem({ children: [] }))).toBe(true)
  })
})
