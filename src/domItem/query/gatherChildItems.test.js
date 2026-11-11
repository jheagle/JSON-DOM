/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createDomItem from '../objects/createDomItem'
import gatherChildItems from './gatherChildItems'

describe('gatherChildItems', () => {
  test('can find all of the child items passing a test', () => {
    const redStyle = { background: 'red' }
    const blueStyle = { background: 'blue' }
    const redSpan1 = createDomItem({ nodeName: 'span', attributes: { label: 'Red Span 1', style: redStyle } })
    const redSpan2 = createDomItem({ nodeName: 'span', attributes: { label: 'Red Span 2', style: redStyle } })
    const redSpan3 = createDomItem({ nodeName: 'span', attributes: { label: 'Red Span 3', style: redStyle } })
    const blueSpan1 = createDomItem({ nodeName: 'span', attributes: { label: 'Blue Span 1', style: blueStyle } })
    const blueSpan2 = createDomItem({ nodeName: 'span', attributes: { label: 'Blue Span 2', style: blueStyle } })
    const blueSpan3 = createDomItem({ nodeName: 'span', attributes: { label: 'Blue Span 3', style: blueStyle } })
    // Create a domItem with mutliple depths of children with different styles
    const divItem1 = createDomItem({ nodeName: 'div', children: [redSpan1, blueSpan1] })
    const divItem2 = createDomItem({ nodeName: 'div', children: [divItem1, redSpan2, blueSpan2] })
    const divItem3 = createDomItem({ nodeName: 'div', children: [divItem2, redSpan3, blueSpan3] })
    const redSpans = gatherChildItems(
      divItem3,
      // The test takes the item and an array of items (initiated as an empty array) and returns the array of items that pass the test
      (item, items = []) => item.attributes?.style?.background === 'red'
        ? items.concat([item])
        : items
    )
    expect(redSpans.length).toBe(3)
    expect(redSpans[0].attributes.label).toBe('Red Span 1')
    expect(redSpans[1].attributes.label).toBe('Red Span 2')
    expect(redSpans[2].attributes.label).toBe('Red Span 3')
  })
})
