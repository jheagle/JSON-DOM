/**
 * @jest-environment jsdom
 */
import createDomItem from '../../general/objects/createDomItem.js'
import registerListeners from './registerListeners'

describe('registerListeners', () => {
  test('can register listeners', () => {
    const divItem = createDomItem()
    const coolFunc = () => 'hello'
    registerListeners({'coolFunc': coolFunc}, divItem)
    expect(divItem.eventListeners.coolFunc).toBe(coolFunc)
  })
})
