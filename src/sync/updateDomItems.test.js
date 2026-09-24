/**
 * @jest-environment jsdom
 */
import 'core-js/stable'
import createDomItem from '../domItem/objects/createDomItem.js'
import updateDomItems from './updateDomItems.js'
import documentDomItem from '../domItem/objects/documentDomItem.js'

describe('updateDomItems', () => {
  test('returns domItem without children when no element is set', () => {
    const originalItem = createDomItem({ children: ['child one', 'child two'] })
    expect(originalItem.children).toHaveLength(2)
    const updated = updateDomItems(originalItem)
    expect(updated.nodeName).toBe('div')
    expect(updated.children).toHaveLength(0)
  })

  test('updates properties of children and nested children', () => {
    const originalSpan = document.createElement('span')
    const originalText = document.createTextNode('Some text content')
    const originalItem = document.createElement('div')
    originalItem.append(originalSpan, originalText)

    const withChildren = updateDomItems(createDomItem({ element: originalItem }))
    expect(withChildren.nodeName).toBe(originalItem.nodeName.toLowerCase())
    expect(withChildren.children[0].nodeName).toBe(originalSpan.nodeName.toLowerCase())
    expect(withChildren.children[1].nodeName).toBe(originalText.nodeName.toLowerCase())
    expect(withChildren.children[1].nodeValue).toBe(originalText.nodeValue)

    // Add a new child of the child
    const newComment = document.createComment('This is a new comment')
    withChildren.element.childNodes[0].append(newComment)
    // change the value before it is even created
    const updatedComment = 'This comment was updated'
    withChildren.element.childNodes[0].childNodes[0].nodeValue = updatedComment
    // change the value of the pre-existing text
    const updatedText = 'This text was updated'
    withChildren.element.childNodes[1].nodeValue = updatedText

    const updatedChildren = updateDomItems(withChildren)
    expect(updatedChildren.children[0].children[0].nodeValue).toBe(updatedComment)
    expect(updatedChildren.children[1].nodeValue).toBe(updatedText)
  })

  test('for document, only updates body and head', () => {
    const documentItem = documentDomItem()
    documentItem.element.nodeValue = 'This value will not be added'
    const bodyAdded = 'This Body value will be added'
    documentItem.body.element.title = bodyAdded
    const headAdded = 'This Head value will be added'
    documentItem.head.element.title = headAdded
    const updated = updateDomItems(documentItem)
    expect(updated.nodeValue).toBeNull()
    expect(updated.children[0].attributes.title).toBe(headAdded)
    expect(updated.children[1].attributes.title).toBe(bodyAdded)
  })
})
