/**
 * @jest-environment jsdom
 */
import createDomItem from '../domItem/objects/createDomItem'
import updateChildren from './updateChildren'

describe('updateChildren', () => {
  test('will update the order of the children for the domItem', () => {
    const element = document.createElement('div')
    const comment = 'This is a comment node'
    const text = 'This is a text node'
    const childElement = 'hr'
    element.innerHTML = `<!--${comment}-->${text}<${childElement}>`
    const originalItem = createDomItem({ element })
    expect(originalItem.children).toHaveLength(0)
    const updated = updateChildren(originalItem)
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
    const originalItem = createDomItem({ nodeName: divNode.nodeName.toLowerCase(), element: divNode })
    const commentChild = createDomItem({
      nodeName: commentNode.nodeName,
      nodeValue: commentNode.nodeValue,
      element: commentNode
    })
    const textChild = createDomItem({ nodeName: textNode.nodeName, nodeValue: textNode.nodeValue, element: textNode })
    const hrChild = createDomItem({ nodeName: hrNode.nodeName.toLowerCase(), element: hrNode })
    originalItem.children = [commentChild, textChild, hrChild]

    // Confirm that the update makes no changes to the original item
    const updated = updateChildren(originalItem)
    expect(updated.nodeName).toBe(divNode.nodeName.toLowerCase())
    expect(updated.attributes).toEqual({})
    expect(updated.children).toHaveLength(3)
    expect(updated.children[0].nodeName).toBe(commentNode.nodeName)
    expect(updated.children[0].nodeValue).toBe(commentNode.nodeValue)
    expect(updated.children[0].attributes).toEqual({})
    expect(updated.children[1].nodeName).toBe(textNode.nodeName)
    expect(updated.children[1].nodeValue).toBe(textNode.nodeValue)
    expect(updated.children[1].attributes).toEqual({})
    expect(updated.children[2].nodeName).toBe(hrNode.nodeName.toLowerCase())
    expect(updated.children[2].attributes).toEqual({})

    // Add a new element, and re-arrange the children
    const brNode = document.createElement('br')
    textNode.nodeValue = 'This is now below the HR node'
    divNode.replaceChild(brNode, textNode)
    divNode.append(textNode)

    const updatedAgain = updateChildren(updated)
    textChild.nodeValue = textNode.nodeValue
    expect(updatedAgain.children).toHaveLength(4)
    expect(updatedAgain.children[0]).toBe(commentChild)
    expect(updated.children[1].nodeName).toBe(brNode.nodeName.toLowerCase())
    expect(updatedAgain.children[2]).toBe(hrChild)
    expect(updatedAgain.children[3]).toStrictEqual(textChild)
  })

  test('updates removed children', () => {
    const divNode = document.createElement('div')
    const commentNode = document.createComment('This is a comment node')
    const textNode = document.createTextNode('This is a text node')
    const hrNode = document.createElement('hr')
    divNode.append(commentNode, textNode, hrNode)
    const originalItem = createDomItem({ nodeName: divNode.nodeName.toLowerCase(), element: divNode })
    const commentChild = createDomItem({
      nodeName: commentNode.nodeName,
      nodeValue: commentNode.nodeValue,
      element: commentNode
    })
    const textChild = createDomItem({ nodeName: textNode.nodeName, nodeValue: textNode.nodeValue, element: textNode })
    const hrChild = createDomItem({ nodeName: hrNode.nodeName.toLowerCase(), element: hrNode })
    originalItem.children = [commentChild, textChild, hrChild]

    divNode.removeChild(commentNode)
    divNode.removeChild(hrNode)
    expect(originalItem.children).toHaveLength(3)
    const updatedItem = updateChildren(originalItem)
    expect(updatedItem.children).toHaveLength(1)
    expect(updatedItem.children[0]).toBe(textChild)
  })
})
