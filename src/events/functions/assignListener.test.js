/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import assignListener from './assignListener'

describe('assignListener', () => {
  test('will apply an event listener to an element', () => {
    const clickButton = document.createElement('button')
    document.body.appendChild(clickButton)
    const testFn = jest.fn()
    assignListener('click', clickButton, () => testFn())
    clickButton.click()
    expect(testFn).toHaveBeenCalledTimes(1)
  })
})
