/**
 * @jest-environment jsdom
 */
import documentDomItem from './documentDomItem'

describe('documentDomItem', () => {
  test('creates a document DOM item', () => {
    const domItem = documentDomItem()
    expect(domItem).toBeInstanceOf(Object)
  })

  test('has valid body', () => {
    expect(documentDomItem().children[1].nodeName).toBe('body')
  })
})
