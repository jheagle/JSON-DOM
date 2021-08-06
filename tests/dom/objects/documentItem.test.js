/**
 * @jest-environment jsdom
 */
import documentItem from '../../../src/dom/objects/documentItem'

test('documentItem has valid head', () => {
  expect(documentItem.children[0].tagName).toBe('head')
})

test('documentItem has valid body', () => {
  expect(documentItem.children[1].tagName).toBe('body')
})