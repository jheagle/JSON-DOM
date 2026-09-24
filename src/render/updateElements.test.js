/**
 * @jest-environment jsdom
 */
import 'core-js/stable'
import createDomItem from '../domItem/objects/createDomItem'
import updateElements from './updateElements'
import documentDomItem from '../domItem/objects/documentDomItem'

describe('updateElements', () => {
  test('returns with new element when none previously set', () => {
    const originalItem = createDomItem()
    expect(originalItem.element).toBeNull()
    const updated = updateElements(originalItem)
    expect(updated.nodeName).toBe('div')
    expect(updated.element.nodeName.toLowerCase()).toBe('div')
    expect(updated.children).toHaveLength(0)
  })

  test('updates properties of child nodes and nested child nodes', () => {
    const originalSpan = createDomItem({ nodeName: 'span' })
    const originalText = createDomItem({ nodeName: '#text', nodeValue: 'Some text content' })
    const originalItem = createDomItem({ nodeName: 'div', children: [originalSpan, originalText] })

    const withElements = updateElements(originalItem)
    expect(withElements.element.nodeName.toLowerCase()).toBe(originalItem.nodeName)
    expect(withElements.children[0].element.nodeName.toLowerCase()).toBe(originalSpan.nodeName)
    expect(withElements.children[1].element.nodeName.toLowerCase()).toBe(originalText.nodeName)

    // Add a new child of the child
    withElements.children[0].children = [createDomItem({ nodeName: '#comment', nodeValue: 'This is a new comment' })]
    // change the value before it is even created
    const updatedComment = 'This comment was updated'
    withElements.children[0].children[0].nodeValue = updatedComment
    // change the value of the pre-existing text
    const updatedText = 'This text was updated'
    withElements.children[1].nodeValue = updatedText

    const updatedElements = updateElements(withElements)
    expect(updatedElements.element.childNodes[0].childNodes[0].nodeValue).toBe(updatedComment)
    expect(updatedElements.element.childNodes[1].nodeValue).toBe(updatedText)
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
