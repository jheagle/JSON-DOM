/**
 * @jest-environment jsdom
 */
import documentDomItem from '../../general/objects/documentDomItem.js'
import registerListener from './registerListener'

describe('registerListener', () => {
  test('can register a listener', () => {
    const parentItem = documentDomItem()
    const coolFunc = () => 'hello'
    registerListener(coolFunc, 'coolFunc', parentItem)
    expect(parentItem.eventActions.coolFunc).toBe(coolFunc)
  })
})
