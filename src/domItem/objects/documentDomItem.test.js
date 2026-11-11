/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import documentDomItem from './documentDomItem'

describe('documentDomItem', () => {
  test('creates a document DOM item', () => {
    const domItem = documentDomItem()
    expect(domItem).toBeInstanceOf(Object)
  })

  test('has valid body', () => {
    expect(documentDomItem().children[1].nodeName).toBe('body')
  })
})
