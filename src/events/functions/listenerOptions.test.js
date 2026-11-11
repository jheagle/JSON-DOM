/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import listenerOptions from './listenerOptions'

describe('listenerOptions', () => {
  test('will use provided options when supported', () => {
    const options = { capture: false, once: false, passive: false }
    const result = listenerOptions(options)
    expect(result).toEqual(options)
    expect(listenerOptions.supportsOptions).toBe(true)
  })
})
