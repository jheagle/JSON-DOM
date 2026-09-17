import addEventListener from './addEventListener.js'
import createDomItem from '../../general/objects/createDomItem.js'

describe('addEventListener', () => {
  test('will add event listener to domItem', () => {
    const item = createDomItem()
    const testFunction = () => {}
    const eventName = 'click'
    const updatedItem = addEventListener(item, eventName, testFunction)
    expect(updatedItem.eventListeners).toHaveProperty(eventName)
    expect(updatedItem.eventListeners[eventName][0].listenerFunc).toBe(testFunction)
  })
})
