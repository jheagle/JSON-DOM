/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createDomItem from '../objects/createDomItem'
import getParentsByTagName from './getParentsByTagName'

describe('getParentsByTagName', () => {
  test('will find the parent nodes with a specific tag name', () => {
    const divParent = createDomItem({ nodeName: 'div', parentItem: {}, attributes: { name: 'red' } })
    const divItem = createDomItem({ nodeName: 'div', parentItem: divParent })
    const spanItem = createDomItem({ nodeName: 'span', parentItem: divItem })
    divParent.appendChild(divItem)
    divItem.appendChild(spanItem)
    const redParents = getParentsByTagName('div', spanItem)
    expect(redParents.length).toBe(1)
    expect(redParents[0].attributes.name).toBe('red')
  })
})
