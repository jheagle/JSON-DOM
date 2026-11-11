/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createChangeList from './createChangeList'

describe('createChangeList', () => {
  test('will default all required properties', () => {
    const changeList = createChangeList()
    expect(changeList).toHaveProperty('removed')
    expect(changeList).toHaveProperty('added')
    expect(changeList).toHaveProperty('appendChanges')
  })
  test('will initialize with provided removed and added changes', () => {
    const changeList = createChangeList({
      removed: { foo: 'bar' },
      added: { baz: 'qux' }
    })
    expect(changeList.removed).toEqual({ foo: 'bar' })
    expect(changeList.added).toEqual({ baz: 'qux' })
  })
})
