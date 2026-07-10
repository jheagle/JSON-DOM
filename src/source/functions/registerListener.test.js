/**
 * @jest-environment jsdom
 */
import createDomItem from '../objects/createDomItem.js'
import registerListener from './registerListener'

describe('registerListener', () => {
  test('can register a listener', () => {
    const divItem = createDomItem()
    const coolFunc = () => 'hello'
    registerListener(coolFunc, 'coolFunc', divItem)
    expect(divItem.eventListeners.coolFunc).toBe(coolFunc)
  })
})
