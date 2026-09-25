/**
 * @jest-environment jsdom
 */
import createCoreItem from './createCoreItem'

describe('createCoreItem', () => {
  test('defaults every property of the generic item, and has no element and no traits', () => {
    const item = createCoreItem()
    expect(item).toMatchObject({
      attributes: {},
      children: [],
      eventListeners: {},
      has: {},
      jsonExclusions: [],
      nodeName: 'div',
      nodeValue: null,
      parentItem: null
    })
    expect(item).not.toHaveProperty('element')
    expect(item).not.toHaveProperty('activeListeners')
  })

  test('completes and returns the object it is given, keeping what it already has', () => {
    const given = { nodeName: 'span', attributes: { className: 'x' }, custom: 5 }
    const item = createCoreItem(given)
    expect(item).toBe(given)
    expect(item.nodeName).toBe('span')
    expect(item.custom).toBe(5)
    expect(item.children).toEqual([])
  })

  test('can attach and detach children without any element', () => {
    const parent = createCoreItem()
    const child = createCoreItem()
    parent.appendChild(child)
    expect(parent.children).toEqual([child])
    expect(child.parentItem).toBe(parent)
  })
})
