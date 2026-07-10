/**
 * @jest-environment jsdom
 */
import createDomItem from '../objects/createDomItem.js'
import renderHtml from './renderHtml.js'
import documentItem from '../objects/documentItem.js'

describe('renderHtml', () => {
  test('returns with new element when none previously set', () => {
    const originalItem = createDomItem()
    expect(originalItem.element).toBeNull()
    const updated = renderHtml(originalItem)
    expect(updated.nodeName).toBe('div')
    expect(updated.element.nodeName.toLowerCase()).toBe('div')
    expect(updated.children).toHaveLength(0)
  })

  test('defaults to documentItem', () => {
    const originalItem = createDomItem({'type': 'div', 'properties': {'id': 'test-div'}})
    documentItem.body.appendChild(originalItem)
    expect(originalItem.element).toBeNull()
    const updated = renderHtml()
    expect(updated).toBe(documentItem)
    expect(updated.body.children[0].nodeName).toBe('div')
    expect(updated.body.children[0].element.nodeName.toLowerCase()).toBe('div')
  })
})
