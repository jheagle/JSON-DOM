/**
 * @jest-environment jsdom
 */
import withTrait from './withTrait'
import defineTrait from './defineTrait'
import hasTrait from './hasTrait'
import createCoreItem from '../objects/createCoreItem'

describe('withTrait', () => {
  test('puts the data on the same item and adds the trait to its has map', () => {
    defineTrait('test.column', { keys: ['point'] })
    const item = createCoreItem({ nodeName: 'div' })
    const result = withTrait(item, 'test.column', { point: { x: 1, y: 2, z: 0 } })
    expect(result).toBe(item)
    expect(item.point).toEqual({ x: 1, y: 2, z: 0 })
    expect(item.has).toEqual({ 'test.column': true })
    expect(hasTrait(item, 'test.column')).toBe(true)
  })

  test('gives the render trait its default, an element which is null, and lets the data win', () => {
    const plain = withTrait(createCoreItem(), 'render', {})
    expect(plain.element).toBeNull()
    const element = document.createElement('div')
    expect(withTrait(createCoreItem(), 'render', { element }).element).toBe(element)
  })

  test('uses the defaults of a trait which defines them, unless the data says otherwise', () => {
    defineTrait('test.tile', { keys: ['hasShip', 'isHit'], defaults: () => ({ hasShip: false, isHit: false }) })
    const item = withTrait(createCoreItem(), 'test.tile', { isHit: true })
    expect(item.hasShip).toBe(false)
    expect(item.isHit).toBe(true)
  })

  test('keeps the traits the item already has', () => {
    defineTrait('test.first', { keys: [] })
    defineTrait('test.second', { keys: [] })
    const item = withTrait(withTrait(createCoreItem(), 'test.first', {}), 'test.second', {})
    expect(item.has).toEqual({ 'test.first': true, 'test.second': true })
  })

  test('works on a plain object which has no has map yet', () => {
    const item = withTrait({ nodeName: 'div' }, 'render', { element: null })
    expect(item.has).toEqual({ render: true })
  })
})
