/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import defineTrait from './defineTrait'
import getTraitDefinition from './getTraitDefinition'

describe('defineTrait / getTraitDefinition', () => {
  test('a defined trait can be found again', () => {
    const definition = { keys: ['axis'], serializable: true }
    expect(defineTrait('test.row', definition)).toBe(definition)
    expect(getTraitDefinition('test.row')).toBe(definition)
  })

  test('defining a trait again replaces its definition', () => {
    defineTrait('test.replaced', { keys: ['a'] })
    defineTrait('test.replaced', { keys: ['b'] })
    expect(getTraitDefinition('test.replaced').keys).toEqual(['b'])
  })

  test('a trait which was never defined has no definition', () => {
    expect(getTraitDefinition('test.never-defined')).toBeUndefined()
  })

  test('json-dom brings the render trait: an element and its listeners, which are not json', () => {
    const render = getTraitDefinition('render')
    expect(render.keys).toEqual(['element', 'activeListeners'])
    expect(render.serializable).toBe(false)
    expect(render.defaults()).toEqual({ element: null })
  })
})
