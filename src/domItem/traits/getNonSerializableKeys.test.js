/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import getNonSerializableKeys from './getNonSerializableKeys'
import withTrait from './withTrait'
import defineTrait from './defineTrait'
import createCoreItem from '../objects/createCoreItem'
import createDomItem from '../objects/createDomItem'

describe('getNonSerializableKeys', () => {
  test('an item with the render trait has its element and listeners left out of json', () => {
    expect(getNonSerializableKeys(createDomItem())).toEqual(['element', 'activeListeners'])
  })

  test('an item without traits has nothing to leave out', () => {
    expect(getNonSerializableKeys(createCoreItem())).toEqual([])
  })

  test('takes in every trait of the item which is marked not serializable, and no others', () => {
    defineTrait('test.transient', { keys: ['socket', 'timer'], serializable: false })
    defineTrait('test.persistent', { keys: ['score'] })
    const item = withTrait(withTrait(createCoreItem(), 'test.transient', { socket: 1, timer: 2 }), 'test.persistent', { score: 3 })
    expect(getNonSerializableKeys(item)).toEqual(['socket', 'timer'])
  })

  test('ignores a trait which was never defined', () => {
    expect(getNonSerializableKeys(createCoreItem({ has: { 'test.unknown': true } }))).toEqual([])
  })
})
