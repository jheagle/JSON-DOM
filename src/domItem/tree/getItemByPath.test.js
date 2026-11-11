/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import appendChild from './appendChild'
import createDomItem from '../objects/createDomItem'
import getItemByPath from './getItemByPath'
import getItemPath from './getItemPath'

describe('getItemByPath', () => {
  test('an empty path resolves to the root itself', () => {
    const root = createDomItem({ nodeName: '#document', parentItem: {} })
    expect(getItemByPath(root, [])).toBe(root)
  })

  test('resolves a nested path back to the item it was built from', () => {
    const grandparent = createDomItem({ nodeName: 'ul', parentItem: {} })
    const parent = createDomItem({ nodeName: 'li' })
    const otherParent = createDomItem({ nodeName: 'li' })
    const child = createDomItem({ nodeName: 'span' })
    appendChild(grandparent, parent)
    appendChild(grandparent, otherParent)
    appendChild(parent, child)
    expect(getItemByPath(grandparent, getItemPath(child))).toBe(child)
  })

  test('throws when the path no longer matches the tree (index out of range)', () => {
    const root = createDomItem({ nodeName: 'ul', parentItem: {} })
    expect(() => getItemByPath(root, [0])).toThrow('No item at index 0 of path [0] - the tree may have changed shape since this path was built.')
  })
})
