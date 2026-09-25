/**
 * @jest-environment jsdom
 */
import createDomItem from './createDomItem'

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
})
