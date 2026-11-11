/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createDomItem from '../objects/createDomItem'
import generateElement from '../../render/generateElement'
import getItemByElement from './getItemByElement'

describe('getItemByElement', () => {
  test('finds the item itself when its element matches', () => {
    const item = generateElement(createDomItem({ nodeName: 'div' }))
    expect(getItemByElement(item, item.element)).toBe(item)
  })

  test('finds a descendant item whose element matches', () => {
    const parent = generateElement(createDomItem({ nodeName: 'div' }))
    const child = generateElement(createDomItem({ nodeName: 'span' }))
    parent.appendChild(child)
    expect(getItemByElement(parent, child.element)).toBe(child)
  })

  test('returns null when no item in the subtree matches', () => {
    const item = generateElement(createDomItem({ nodeName: 'div' }))
    const strayElement = document.createElement('span')
    expect(getItemByElement(item, strayElement)).toBeNull()
  })

  test('returns null for a null element', () => {
    const item = generateElement(createDomItem({ nodeName: 'div' }))
    expect(getItemByElement(item, null)).toBeNull()
  })
})
