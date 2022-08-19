/**
 * @jest-environment jsdom
 */
import 'core-js/stable'
import createDomItem from '../objects/createDomItem'
import updateElements from './updateElements'
import documentDomItem from '../objects/documentDomItem'

describe('updateElements', () => {
  test('returns with new element when none previously set', () => {
    const originalItem = createDomItem()
    expect(originalItem.element).toBeNull()
    const updated = updateElements(originalItem)
    expect(updated.nodeName).toBe('div')
    expect(updated.element.nodeName.toLowerCase()).toBe('div')
    expect(updated.children).toHaveLength(0)
  })

  test('add missing child nodes based on domItem children', () => {
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
    const updated = updateElements(originalItem)
    expect(updated.element.childNodes).toHaveLength(3)
    expect(updated.element.childNodes[0].nodeName).toBe('#comment')
    expect(updated.element.childNodes[0].nodeValue).toBe(comment)
    expect(updated.element.childNodes[1].nodeName).toBe('#text')
    expect(updated.element.childNodes[1].nodeValue).toBe(text)
    expect(updated.element.childNodes[2].nodeName.toLowerCase()).toBe(childElement)
  })

  test('updates child nodes based on domItem children', () => {
    const originalItem = createDomItem({ nodeName: 'div' })
    const commentChild = createDomItem({ nodeName: '#comment', nodeValue: 'This is a comment node' })
    const textChild = createDomItem({ nodeName: '#text', nodeValue: 'This is a text node' })
    const hrChild = createDomItem({ nodeName: 'hr' })
    originalItem.children = [commentChild, textChild, hrChild]

    // Confirm that the update makes no changes to the original element
    const updated = updateElements(originalItem)
    expect(updated.element.nodeName.toLowerCase()).toBe(originalItem.nodeName)
    expect(updated.element.childNodes).toHaveLength(3)
    expect(updated.element.childNodes[0].nodeName).toBe(commentChild.nodeName)
    expect(updated.element.childNodes[0].nodeValue).toBe(commentChild.nodeValue)
    expect(updated.element.childNodes[1].nodeName).toBe(textChild.nodeName)
    expect(updated.element.childNodes[1].nodeValue).toBe(textChild.nodeValue)
    expect(updated.element.childNodes[2].nodeName.toLowerCase()).toBe(hrChild.nodeName)

    // Add a new item, and re-arrange the child nodes
    const h1Child = createDomItem({
      nodeName: 'h1',
      children: [createDomItem({ nodeName: '#text', nodeValue: 'This is a h1 node' })]
    })
    textChild.nodeValue = 'This is now below the HR node'
    updated.children = [commentChild, h1Child, hrChild, textChild]

    const updatedAgain = updateElements(updated)
    expect(updatedAgain.element.childNodes).toHaveLength(4)
    expect(updatedAgain.element.childNodes[0]).toBe(commentChild.element)
    expect(updated.element.childNodes[1].nodeName).toBe(h1Child.element.nodeName)
    expect(updated.element.childNodes[1].childNodes).toHaveLength(1)
    expect(updated.element.childNodes[1].childNodes[0].nodeValue).toBe(h1Child.element.textContent)
    expect(updatedAgain.element.childNodes[2]).toBe(hrChild.element)
    expect(updatedAgain.element.childNodes[3]).toBe(textChild.element)
  })

  test('for document, only updates body and head', () => {
    const documentItem = documentDomItem()
    documentItem.nodeValue = 'This value will not be added'
    const bodyAdded = 'This Body value will be added'
    documentItem.body.attributes.title = bodyAdded
    const headAdded = 'This Head value will be added'
    documentItem.head.attributes.title = headAdded
    const updated = updateElements(documentItem)
    expect(updated.element.nodeValue).toBeNull()
    expect(updated.children[0].element.title).toBe(headAdded)
    expect(updated.children[1].element.title).toBe(bodyAdded)
  })
})