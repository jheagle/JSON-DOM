/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createDomItem from '../objects/createDomItem'
import getChildrenByName from './getChildrenByName'

describe('getChildrenByName', () => {
  test('will find all child nodes with a specific name', () => {
    const divItem = createDomItem({
      nodeName: 'div',
      children: [
        createDomItem({ nodeName: 'span', attributes: { name: 'red' } }),
        createDomItem({ nodeName: 'span', attributes: { name: 'blue' } })
      ]
    })
    const redSpans = getChildrenByName('red', divItem)
    expect(redSpans.length).toBe(1)
    expect(redSpans[0].attributes.name).toBe('red')
  })
})
