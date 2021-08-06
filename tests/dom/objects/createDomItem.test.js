/**
 * @jest-environment jsdom
 */
import createDomItem from '../../../src/dom/objects/createDomItem'

test('createDomItem will default all required properties ', () => {
  const domItem = createDomItem()
  expect(domItem).toHaveProperty('tagName')
})