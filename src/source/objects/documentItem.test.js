/**
 * @jest-environment jsdom
 */
import documentItem from './documentItem'

test('documentItem has valid head', () => {
  expect(documentItem.children[0].nodeName).toBe('head')
})

test('documentItem has valid body', () => {
  expect(documentItem.children[1].nodeName).toBe('body')
})