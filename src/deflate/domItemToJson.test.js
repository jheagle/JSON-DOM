/**
 * @jest-environment jsdom
 */
import createDomItem from '../domItem/objects/createDomItem'
import domItemToJson from './domItemToJson'
import generateElement from '../render/generateElement'
import createCoreItem from '../domItem/objects/createCoreItem'
import defineTrait from '../domItem/traits/defineTrait'
import withTrait from '../domItem/traits/withTrait'
import jsonToDomItem from '../inflate/jsonToDomItem'

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
    expect(parsedJson).not.toHaveProperty('parentItem')
    expect(parsedJson).not.toHaveProperty('element')
    expect(parsedJson.children[0]).not.toHaveProperty('parentItem')
    expect(parsedJson.children[0]).not.toHaveProperty('element')
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

  test('will strip per-call propertiesToDelete without mutating the item or affecting other calls', () => {
    const domItemInstance = generateElement(createDomItem({ nodeName: 'span' }))
    const parentInstance = generateElement(createDomItem({
      nodeName: 'div',
      parentItem: {},
      children: [domItemInstance]
    }))
    domItemInstance.parentItem = parentInstance
    domItemInstance.secret = 'hidden for this viewer only'
    parentInstance.secret = 'also hidden for this viewer only'
    const redactedJson = JSON.parse(domItemToJson(parentInstance, { propertiesToDelete: ['secret'] }))
    expect(redactedJson.secret).toBeUndefined()
    expect(redactedJson.children[0].secret).toBeUndefined()
    const unredactedJson = JSON.parse(domItemToJson(parentInstance))
    expect(unredactedJson.secret).toBe(parentInstance.secret)
    expect(unredactedJson.children[0].secret).toBe(domItemInstance.secret)
  })

  test('keeps the has map, so the other side knows which traits the item had', () => {
    const parsed = JSON.parse(domItemToJson(createDomItem({ nodeName: 'div' })))
    expect(parsed.has).toEqual({ render: true })
  })

  test('leaves out the properties of a trait which is not serializable, and keeps the data of one which is', () => {
    defineTrait('test.transient', { keys: ['socket'], serializable: false })
    defineTrait('test.persistent', { keys: ['score'] })
    const item = withTrait(withTrait(createDomItem({ nodeName: 'div' }), 'test.transient', { socket: 'open' }), 'test.persistent', { score: 3 })
    const parsed = JSON.parse(domItemToJson(item))
    expect(parsed).not.toHaveProperty('socket')
    expect(parsed.score).toBe(3)
    expect(parsed.has).toMatchObject({ 'test.transient': true, 'test.persistent': true })
  })

  test('deflates an item which has no render trait at all, and its children', () => {
    const child = createCoreItem({ nodeName: 'span' })
    const parent = createCoreItem({ nodeName: 'div', parentItem: {}, children: [child] })
    child.parentItem = parent
    const parsed = JSON.parse(domItemToJson(parent))
    expect(parsed).not.toHaveProperty('element')
    expect(parsed.children[0].nodeName).toBe('span')
    expect(parsed.children[0]).not.toHaveProperty('parentItem')
  })

  test('inflating what was deflated gives items with the render trait again', () => {
    const inflated = jsonToDomItem(domItemToJson(createCoreItem({ nodeName: 'div', parentItem: {}, children: [createCoreItem({ nodeName: 'span' })] })))
    expect(inflated.has.render).toBe(true)
    expect(inflated.element).toBeNull()
    expect(inflated.children[0].has.render).toBe(true)
  })
})
