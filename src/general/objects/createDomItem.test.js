/**
 * @jest-environment jsdom
 */
import createDomItem from './createDomItem'

describe('createDomItem', () => {
  test('will default all required properties', () => {
    const domItem = createDomItem()
    expect(domItem).toHaveProperty('nodeName')
  })
})