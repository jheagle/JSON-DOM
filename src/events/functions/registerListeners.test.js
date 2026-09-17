/**
 * @jest-environment jsdom
 */
import documentDomItem from '../../general/objects/documentDomItem.js'
import registerListeners from './registerListeners'

describe('registerListeners', () => {
  test('can register listeners', () => {
    const parentItem = documentDomItem()
    const coolFunc = () => 'hello'
    registerListeners({ coolFunc }, parentItem)
    expect(parentItem.eventActions.coolFunc).toBe(coolFunc)
  })
})
