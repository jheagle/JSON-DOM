/**
 * @jest-environment jsdom
 */
import createDomItem from '../domItem/objects/createDomItem'
import generateElement from './generateElement'

describe('generateElement', () => {
  test('can create an HTMLElement', () => {
    const item = createDomItem({ nodeName: 'div' })
    const elementCreated = generateElement(item)
    expect(elementCreated.element).toBeInstanceOf(HTMLDivElement)
  })

  test('can create a Text Node', () => {
    const item = createDomItem({ nodeName: '#text', nodeValue: 'This is the text' })
    const nodeCreated = generateElement(item)
    expect(nodeCreated.element).toBeInstanceOf(Text)
    expect(nodeCreated.element.nodeValue).toBe(nodeCreated.nodeValue)
  })

  test('can create a Comment Node', () => {
    const item = createDomItem({ nodeName: '#comment', nodeValue: 'This is the comment' })
    const nodeCreated = generateElement(item)
    expect(nodeCreated.element).toBeInstanceOf(Comment)
    expect(nodeCreated.element.nodeValue).toBe(nodeCreated.nodeValue)
  })
})
