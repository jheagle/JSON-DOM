/**
 * @jest-environment jsdom
 */
import createDomItem from '../domItem/objects/createDomItem'
import domItemToJson from '../deflate/domItemToJson'
import jsonToDomItem from './jsonToDomItem'
import generateElement from '../render/generateElement'
import updateElements from '../render/updateElements'

describe('jsonToDomItem', () => {
  test('will convert JSON to domItem and re-add circular references', () => {
    const domItemInstance = generateElement(createDomItem({ nodeName: 'span' }))
    const parentInstance = generateElement(createDomItem({
      nodeName: 'div',
      parentItem: {},
      children: [domItemInstance]
    }))
    domItemInstance.parentItem = parentInstance
    expect(parentInstance.element.constructor.name).toBe('HTMLDivElement')
    const domJson = domItemToJson(parentInstance)
    expect(typeof domJson).toBe('string')
    const parsedJson = jsonToDomItem(domJson)
    expect(parsedJson.children[0].parentItem).toBe(parsedJson)
  })

  test('can build an object that can update HTML', () => {
    const domItemInstance = generateElement(createDomItem({ nodeName: 'span' }))
    const parentInstance = generateElement(createDomItem({
      nodeName: 'div',
      parentItem: {},
      children: [domItemInstance]
    }))
    domItemInstance.parentItem = parentInstance
    // Original has elements and is converted to JSON
    expect(parentInstance.element.constructor.name).toBe('HTMLDivElement')
    expect(parentInstance.children[0].element.constructor.name).toBe('HTMLSpanElement')
    const domJson = domItemToJson(parentInstance)
    expect(typeof domJson).toBe('string')
    // Parsed into DomItem, but elements are null
    const parsedJson = jsonToDomItem(domJson)
    expect(parsedJson.element).toBeNull()
    expect(parsedJson.children[0].element).toBeNull()
    // Attempt to re-add the elements
    const updatedParsed = updateElements(parsedJson)
    expect(updatedParsed.element.constructor.name).toBe('HTMLDivElement')
    expect(updatedParsed.children[0].element.constructor.name).toBe('HTMLSpanElement')
  })
})
