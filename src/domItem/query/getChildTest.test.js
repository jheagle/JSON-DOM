/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createDomItem from '../objects/createDomItem'
import getChildTest from './getChildTest'

describe('getChildTest', () => {
  test('will find the child node with a specific attribute', () => {
    const divItem = createDomItem({ nodeName: 'div', attributes: { name: 'red' } })
    const redDivs = getChildTest('name', 'red')(divItem, [])
    expect(redDivs.length).toBe(1)
    expect(redDivs[0].attributes.name).toBe('red')
  })
})
