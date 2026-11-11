/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import getAssignedStyles from './getAssignedStyles'

describe('getAssignedStyles', () => {
  test('will build object of all styles', () => {
    document.body.innerHTML = '<div style="display: block; background-color: red"></div>'
    const element = document.getElementsByTagName('div')[0]
    expect(getAssignedStyles(element.style)).toEqual({ display: 'block', 'background-color': 'red' })
  })
})
