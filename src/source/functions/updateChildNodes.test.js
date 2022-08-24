/**
 * @jest-environment jsdom
 */
import 'core-js/stable'
import createDomItem from '../objects/createDomItem.js'
import updateChildNodes from './updateChildNodes.js'

describe('updateChildNodes', () => {
  test('will update the order of the childNodes for the domItem element', () => {
    const element = document.createElement('div')
    const originalItem = createDomItem({ element: element })
    const comment = 'This is a comment node'
    const text = 'This is a text node'
    const childElement = 'hr'
    originalItem.children = [
      createDomItem({ nodeName: '#comment', nodeValue: comment }),
      createDomItem({ nodeName: '#text', nodeValue: text }),
      createDomItem({ nodeName: 'hr' })
    ]
    expect(originalItem.element.childNodes).toHaveLength(0)
    const updated = updateChildNodes(originalItem)
    expect(updated.element.childNodes).toHaveLength(3)
    expect(updated.element.childNodes[0].nodeName).toBe('#comment')
    expect(updated.element.childNodes[0].nodeValue).toBe(comment)
    expect(updated.element.childNodes[1].nodeName).toBe('#text')
    expect(updated.element.childNodes[1].nodeValue).toBe(text)
    expect(updated.element.childNodes[2].nodeName.toLowerCase()).toBe(childElement)
  })
})
