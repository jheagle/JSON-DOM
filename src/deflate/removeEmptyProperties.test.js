/**
 * @jest-environment jsdom
 */
import createDomItem from '../domItem/objects/createDomItem'
import removeEmptyProperties from './removeEmptyProperties'

describe('removeEmptyProperties', () => {
  test('can remove empty properties', () => {
    const divItem = createDomItem({ type: 'div' })
    divItem.someProperty = {}
    divItem.anotherProperty = null
    removeEmptyProperties(divItem)
    expect(divItem.someProperty).toBeUndefined()
    expect(divItem.anotherProperty).toBeUndefined()
  })

  test('can remove specified properties', () => {
    const divItem = createDomItem({ type: 'div' })
    divItem.someProperty = {}
    divItem.anotherProperty = null
    divItem.unwantedProperty = 'remove me'
    removeEmptyProperties(divItem, ['unwantedProperty'])
    expect(divItem.someProperty).toBeUndefined()
    expect(divItem.anotherProperty).toBeUndefined()
    expect(divItem.unwantedProperty).toBeUndefined()
  })
})
