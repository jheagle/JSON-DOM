/**
 * @jest-environment jsdom
 */
import 'core-js/stable'
import createDomItem from '../objects/createDomItem'
import updateDomItems from './updateDomItems'
import documentDomItem from '../objects/documentDomItem'
import updateElements from './updateElements'

describe('updateDomItems', () => {
  test('returns domItem without children when no element is set', () => {
    const originalItem = createDomItem({ children: ['child one', 'child two'] })
    expect(originalItem.children).toHaveLength(2)
    const updated = updateDomItems(originalItem)
    expect(updated.nodeName).toBe('div')
    expect(updated.children).toHaveLength(0)
  })

  test('add missing children based on child nodes', () => {
    const element = document.createElement('div')
    const comment = 'This is a comment node'
    const text = 'This is a text node'
    const childElement = 'hr'
    element.innerHTML = `<!--${comment}-->${text}<${childElement}>`
    const originalItem = createDomItem({ element: element })
    expect(originalItem.children).toHaveLength(0)
    const updated = updateDomItems(originalItem)
    expect(updated.children).toHaveLength(3)
    expect(updated.children[0].nodeName).toBe('#comment')
    expect(updated.children[0].nodeValue).toBe(comment)
    expect(updated.children[0].attributes).toEqual({})
    expect(updated.children[1].nodeName).toBe('#text')
    expect(updated.children[1].nodeValue).toBe(text)
    expect(updated.children[1].attributes).toEqual({})
    expect(updated.children[2].nodeName).toBe(childElement)
    expect(updated.children[2].attributes).toEqual({})
  })

  test('updates children based on child nodes', () => {
    const divNode = document.createElement('div')
    const commentNode = document.createComment('This is a comment node')
    const textNode = document.createTextNode('This is a text node')
    const hrNode = document.createElement('hr')
    divNode.append(commentNode, textNode, hrNode)
    const originalItem = createDomItem({ nodeName: divNode.nodeName, element: divNode })
    const commentChild = createDomItem({
      nodeName: commentNode.nodeName,
      nodeValue: commentNode.nodeValue,
      element: commentNode
    })
    const textChild = createDomItem({ nodeName: textNode.nodeName, nodeValue: textNode.nodeValue, element: textNode })
    const hrChild = createDomItem({ nodeName: hrNode.nodeName, element: hrNode })
    originalItem.children = [commentChild, textChild, hrChild]

    // Confirm that the update makes no changes to the original item
    const updated = updateDomItems(originalItem)
    expect(updated.nodeName).toBe(divNode.nodeName)
    expect(updated.attributes).toEqual({})
    expect(updated.children).toHaveLength(3)
    expect(updated.children[0].nodeName).toBe(commentNode.nodeName)
    expect(updated.children[0].nodeValue).toBe(commentNode.nodeValue)
    expect(updated.children[0].attributes).toEqual({})
    expect(updated.children[1].nodeName).toBe(textNode.nodeName)
    expect(updated.children[1].nodeValue).toBe(textNode.nodeValue)
    expect(updated.children[1].attributes).toEqual({})
    expect(updated.children[2].nodeName).toBe(hrNode.nodeName)
    expect(updated.children[2].attributes).toEqual({})

    // Add a new element, and re-arrange the children
    const h1Node = document.createElement('h1')
    h1Node.textContent = 'This is a h1 node'
    textNode.nodeValue = 'This is now below the HR node'
    divNode.replaceChild(h1Node, textNode)
    divNode.append(textNode)

    const updatedAgain = updateDomItems(updated)
    expect(updatedAgain.children).toHaveLength(4)
    expect(updatedAgain.children[0]).toBe(commentChild)
    expect(updated.children[1].nodeName).toBe(h1Node.nodeName.toLowerCase())
    expect(updated.children[1].children).toHaveLength(1)
    expect(updated.children[1].children[0].nodeValue).toBe(h1Node.textContent)
    expect(updatedAgain.children[2]).toBe(hrChild)
    expect(updatedAgain.children[3]).toBe(textChild)
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