/**
 * @jest-environment jsdom
 */
import createDomItem from '../objects/createDomItem.js'
import domItemToJson from './domItemToJson.js'
import generateElement from './generateElement.js'

describe('domItemToJson', () => {
  test('will convert domItem to JSON skipping circular and elements', () => {
    const domItemInstance = generateElement(createDomItem({ nodeName: 'span' }))
    const parentInstance = generateElement(createDomItem({
      nodeName: 'div',
      parentItem: {},
      children: [domItemInstance]
    }))
    domItemInstance.parentItem = parentInstance
    const domJson = domItemToJson(parentInstance)
    expect(typeof domJson).toBe('string')
    const parsedJson = JSON.parse(domJson)
    expect(parsedJson.parentItem).toBeNull()
    expect(parsedJson.element).toBeNull()
    expect(parsedJson.children[0].parentItem).toBeNull()
    expect(parsedJson.children[0].element).toBeNull()
  })

  test('will handle exclusion rules', () => {
    const domItemInstance = generateElement(createDomItem({ nodeName: 'span' }))
    domItemInstance.jsonExclusions = ['anotherThingToExclude', 'somethingToExclude']
    const parentInstance = generateElement(createDomItem({
      nodeName: 'div',
      parentItem: {},
      children: [domItemInstance]
    }))
    domItemInstance.parentItem = parentInstance
    parentInstance.jsonExclusions = ['skippedExclusion', 'somethingToExclude']
    parentInstance.somethingToExclude = 'some null'
    domItemInstance.anotherThingToExclude = 'another null'
    domItemInstance.somethingToExclude = 'this will be null'
    domItemInstance.skippedExclusion = 'still here, rule set for parent only'
    const domJson = domItemToJson(parentInstance)
    const parsedJson = JSON.parse(domJson)
    expect(parsedJson.somethingToExclude).toBeUndefined()
    expect(parsedJson.children[0].anotherThingToExclude).toBeUndefined()
    expect(parsedJson.children[0].somethingToExclude).toBeUndefined()
    expect(parsedJson.children[0].skippedExclusion).toBe(domItemInstance.skippedExclusion)
  })
})
