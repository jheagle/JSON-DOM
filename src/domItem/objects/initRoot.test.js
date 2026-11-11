/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import initRoot from './initRoot'

describe('initRoot', () => {
  test('initializes root correctly', () => {
    const root = initRoot()
    expect(root).toBeInstanceOf(Object)
  })
})
