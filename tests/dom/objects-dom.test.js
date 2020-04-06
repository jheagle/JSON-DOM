const jDomObjects = require('../../src/dom/objects')

// documentItem
test('documentItem has valid head', () => {
  expect(jDomObjects.documentItem.children[0].tagName).toBe('head')
})

test('documentItem has valid body', () => {
  expect(jDomObjects.documentItem.children[1].tagName).toBe('body')
})

// DOMItem
// documentDOMItem
// noConflict