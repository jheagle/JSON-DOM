/**
 * @jest-environment jsdom
 */
import documentItem from './documentItem.js'

describe('documentItem', () => {
  test('has valid head', () => {
    expect(documentItem.children[0].nodeName).toBe('head')
  })

  test('has valid body', () => {
    expect(documentItem.children[1].nodeName).toBe('body')
  })
})
