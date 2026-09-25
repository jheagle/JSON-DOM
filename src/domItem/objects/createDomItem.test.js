/**
 * @jest-environment jsdom
 */
import createDomItem from './createDomItem'
import createCoreItem from './createCoreItem'
import isDomItem from '../traits/isDomItem'

describe('createDomItem', () => {
  test('will default all required properties', () => {
    const domItem = createDomItem()
    expect(domItem).toHaveProperty('nodeName')
  })

  test('has the render trait, with an element which is null until it is rendered', () => {
    const domItem = createDomItem()
    expect(domItem.has).toEqual({ render: true })
    expect(domItem.element).toBeNull()
  })

  test('keeps the element it was given, and completes and returns the same object', () => {
    const element = document.createElement('section')
    const given = { nodeName: 'section', element }
    const domItem = createDomItem(given)
    expect(domItem).toBe(given)
    expect(domItem.element).toBe(element)
  })

  test('keeps the traits it already had and adds render', () => {
    expect(createDomItem({ has: { 'matrix.row': true } }).has).toEqual({ 'matrix.row': true, render: true })
  })

  test('completes plain children all the way down, so the whole tree is a DomItem', () => {
    const grandchild = { nodeName: 'li' }
    const child = { nodeName: 'ul', children: [grandchild] }
    const parent = createDomItem({ children: [child] })
    expect(parent.children[0]).toBe(child)
    expect(child.children[0]).toBe(grandchild)
    expect(child.has).toEqual({ render: true })
    expect(grandchild.has).toEqual({ render: true })
    expect(grandchild.element).toBeNull()
    expect(typeof child.appendChild).toBe('function')
    expect(grandchild.eventListeners).toEqual({})
    expect(isDomItem(parent)).toBe(true)
  })

  test('leaves a child which is already an item alone', () => {
    const element = document.createElement('p')
    const made = createDomItem({ element })
    const madeChild = createDomItem({ nodeName: 'em' })
    made.children.push(madeChild)
    const parent = createDomItem({ children: [made] })
    expect(parent.children[0]).toBe(made)
    expect(made.element).toBe(element)
    expect(made.children[0]).toBe(madeChild)
  })

  test('does not turn a generic child item into a render item', () => {
    const generic = createCoreItem()
    createDomItem({ children: [generic] })
    expect(generic.has).toEqual({})
  })
})
