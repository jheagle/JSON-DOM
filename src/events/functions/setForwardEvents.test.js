/**
 * @jest-environment jsdom
 */
import documentDomItem from '../../domItem/objects/documentDomItem'
import setForwardEvents from './setForwardEvents'

describe('setForwardEvents', () => {
  test('sets forwardEvents on the given root item', () => {
    const parentItem = documentDomItem()
    const transport = () => {}
    setForwardEvents(transport, parentItem)
    expect(parentItem.forwardEvents).toBe(transport)
  })

  test('returns the root item', () => {
    const parentItem = documentDomItem()
    const transport = () => {}
    expect(setForwardEvents(transport, parentItem)).toBe(parentItem)
  })
})
