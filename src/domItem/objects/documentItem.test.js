/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import documentItem from './documentItem'

describe('documentItem', () => {
  test('has valid head', () => {
    expect(documentItem.children[0].nodeName).toBe('head')
  })

  test('has valid body', () => {
    expect(documentItem.children[1].nodeName).toBe('body')
  })
})
