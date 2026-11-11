/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createEventListener from './createEventListener'

describe('createEventListener', () => {
  test('will default all required properties', () => {
    const eventListener = createEventListener()
    expect(eventListener).toHaveProperty('listenerFunc')
    expect(eventListener).toHaveProperty('listenerArgs')
    expect(eventListener).toHaveProperty('listenerOptions')
    expect(eventListener).toHaveProperty('listenerActive')
  })
})
