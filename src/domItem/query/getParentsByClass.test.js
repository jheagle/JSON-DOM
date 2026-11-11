/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createDomItem from '../objects/createDomItem'
import getParentsByClass from './getParentsByClass'

describe('getParentsByClass', () => {
  test('will find the parent nodes with a specific class', () => {
    const divParent = createDomItem({ nodeName: 'div', parentItem: {}, attributes: { className: 'red' } })
    const divItem = createDomItem({ nodeName: 'div' })
    const spanItem = createDomItem({ nodeName: 'span' })
    divParent.appendChild(divItem)
    divItem.appendChild(spanItem)
    const redParents = getParentsByClass('red', spanItem)
    expect(redParents.length).toBe(1)
    expect(redParents[0].attributes.className).toBe('red')
  })

  test('finds a parent which carries the class among several, not only an exact single-class match', () => {
    const divParent = createDomItem({ nodeName: 'div', parentItem: {}, attributes: { className: 'player attacker' } })
    const spanItem = createDomItem({ nodeName: 'span' })
    divParent.appendChild(spanItem)
    const found = getParentsByClass('player', spanItem)
    expect(found).toHaveLength(1)
    expect(found[0].attributes.className).toBe('player attacker')
  })

  test('does not match a class name which is only a substring of another class', () => {
    const divParent = createDomItem({ nodeName: 'div', parentItem: {}, attributes: { className: 'form-group' } })
    const spanItem = createDomItem({ nodeName: 'span' })
    divParent.appendChild(spanItem)
    expect(getParentsByClass('form', spanItem)).toHaveLength(0)
    expect(getParentsByClass('group', spanItem)).toHaveLength(0)
  })

  test('a parent with no className at all is never matched', () => {
    const divParent = createDomItem({ nodeName: 'div', parentItem: {} })
    const spanItem = createDomItem({ nodeName: 'span' })
    divParent.appendChild(spanItem)
    expect(getParentsByClass('red', spanItem)).toHaveLength(0)
  })
})
