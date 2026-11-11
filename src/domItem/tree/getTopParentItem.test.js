/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createDomItem from '../objects/createDomItem'
import getTopParentItem from './getTopParentItem'

describe('getTopParentItem', () => {
  test('will find the top parent item for a given child item', () => {
    const divParent = createDomItem({ nodeName: 'div', parentItem: {}, attributes: { name: 'red' } })
    const divItem = createDomItem({ nodeName: 'div', parentItem: divParent })
    const spanItem = createDomItem({ nodeName: 'span', parentItem: divItem })
    divParent.appendChild(divItem)
    divItem.appendChild(spanItem)
    const topParent = getTopParentItem(spanItem)
    expect(topParent.attributes.name).toBe('red')
  })
})
