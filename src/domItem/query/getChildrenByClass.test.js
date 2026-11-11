/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createDomItem from '../objects/createDomItem'
import getChildrenByClass from './getChildrenByClass'

describe('getChildrenByClass', () => {
  test('will find all child nodes with a specific class', () => {
    const divItem = createDomItem({
      nodeName: 'div',
      children: [
        createDomItem({ nodeName: 'span', attributes: { className: 'red' } }),
        createDomItem({ nodeName: 'span', attributes: { className: 'blue' } })
      ]
    })
    const redSpans = getChildrenByClass('red', divItem)
    expect(redSpans.length).toBe(1)
    expect(redSpans[0].attributes.className).toBe('red')
  })

  test('finds a child which carries the class among several, not only an exact single-class match', () => {
    const divItem = createDomItem({
      nodeName: 'div',
      children: [
        createDomItem({ nodeName: 'span', attributes: { className: 'form-group human-group' } }),
        createDomItem({ nodeName: 'span', attributes: { className: 'blue' } })
      ]
    })
    const found = getChildrenByClass('human-group', divItem)
    expect(found).toHaveLength(1)
    expect(found[0].attributes.className).toBe('form-group human-group')
  })

  test('does not match a class name which is only a substring of another class', () => {
    const divItem = createDomItem({
      nodeName: 'div',
      children: [
        createDomItem({ nodeName: 'span', attributes: { className: 'form-group' } })
      ]
    })
    expect(getChildrenByClass('form', divItem)).toHaveLength(0)
    expect(getChildrenByClass('group', divItem)).toHaveLength(0)
  })

  test('a child with no className at all is never matched', () => {
    const divItem = createDomItem({
      nodeName: 'div',
      children: [createDomItem({ nodeName: 'span' })]
    })
    expect(getChildrenByClass('red', divItem)).toHaveLength(0)
  })
})
