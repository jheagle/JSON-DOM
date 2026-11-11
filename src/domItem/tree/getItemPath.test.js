/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import appendChild from './appendChild'
import createDomItem from '../objects/createDomItem'
import getItemPath from './getItemPath'

describe('getItemPath', () => {
  test('the root item (an empty object parent) has an empty path', () => {
    const root = createDomItem({ nodeName: '#document', parentItem: {} })
    expect(getItemPath(root)).toEqual([])
  })

  test('a direct child has a one-level path, its own index among its siblings', () => {
    const parent = createDomItem({ nodeName: 'ul', parentItem: {} })
    const first = createDomItem({ nodeName: 'li' })
    const second = createDomItem({ nodeName: 'li' })
    appendChild(parent, first)
    appendChild(parent, second)
    expect(getItemPath(first)).toEqual([0])
    expect(getItemPath(second)).toEqual([1])
  })

  test('a grandchild has a two-level path', () => {
    const grandparent = createDomItem({ nodeName: 'ul', parentItem: {} })
    const parent = createDomItem({ nodeName: 'li' })
    const child = createDomItem({ nodeName: 'span' })
    appendChild(grandparent, parent)
    appendChild(parent, child)
    expect(getItemPath(child)).toEqual([0, 0])
  })

  test('throws for a detached item (parentItem is null)', () => {
    const detached = createDomItem({ nodeName: 'li', parentItem: null })
    expect(() => getItemPath(detached)).toThrow('Detached child, missing parentItem reference. Use empty object if this is the root item.')
  })
})
