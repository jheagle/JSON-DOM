/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createEventResponder from './createEventResponder'

describe('createEventResponder', () => {
  test('has flag for immediate propagation stopped', () => {
    const responderEvent = createEventResponder(() => {}, true)
    expect(responderEvent).toHaveProperty('handler')
    expect(responderEvent).toHaveProperty('abort')
  })
})
