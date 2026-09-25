/**
 * @jest-environment jsdom
 */
import createDomItem from '../../domItem/objects/createDomItem'
import makeEventHandler from './makeEventHandler'

describe('makeEventHandler', () => {
  test('will create an event handler function', () => {
    const listener = jest.fn()
    const divItem = createDomItem()
    const eventHandler = makeEventHandler(listener, divItem)
    expect(typeof eventHandler).toBe('function')
  })
})
