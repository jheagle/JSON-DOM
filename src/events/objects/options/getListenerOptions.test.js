/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import getListenerOptions from './getListenerOptions'

describe('getListenerOptions', () => {
  test('returns all listener options', () => {
    const results = getListenerOptions()
    expect(Object.keys(results).length).toEqual(4)
    expect(results).toEqual({
      capture: 1,
      once: 2,
      passive: 4,
      signal: 8
    })
  })
})
