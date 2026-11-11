/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import initChildren from './initChildren'

describe('initChildren', () => {
  test('initializes children correctly', () => {
    const children = initChildren()
    expect(children).toBeInstanceOf(Array)
  })
})
