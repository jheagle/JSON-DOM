/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createDomItem from '../domItem/objects/createDomItem'
import updateChildNodes from './updateChildNodes'

describe('updateChildNodes', () => {
  test('will update the order of the childNodes for the domItem element', () => {
    const element = document.createElement('div')
    const originalItem = createDomItem({ element })
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

  test('updates child nodes based on domItem children', () => {
    const originalItem = createDomItem({ nodeName: 'div' })
    const commentChild = createDomItem({ nodeName: '#comment', nodeValue: 'This is a comment node' })
    const originalText = 'This is a text node'
    const textChild = createDomItem({ nodeName: '#text', nodeValue: originalText })
    const hrChild = createDomItem({ nodeName: 'hr' })
    originalItem.children = [commentChild, textChild, hrChild]

    // Updating child nodes will add missing elements, but only applies necessary changes
    const updated = updateChildNodes(originalItem)
    expect(updated.element.nodeName.toLowerCase()).toBe(originalItem.nodeName)
    expect(updated.element.childNodes).toHaveLength(3)
    expect(updated.element.childNodes[0].nodeName).toBe(commentChild.nodeName)
    expect(updated.element.childNodes[0].nodeValue).toBe(commentChild.nodeValue)
    expect(updated.element.childNodes[1].nodeName).toBe(textChild.nodeName)
    expect(updated.element.childNodes[1].nodeValue).toBe(textChild.nodeValue)
    expect(updated.element.childNodes[2].nodeName.toLowerCase()).toBe(hrChild.nodeName)

    // Add a new item, and re-arrange the child nodes
    const brChild = createDomItem({
      nodeName: 'br'
    })
    textChild.nodeValue = 'This is now below the HR node'
    updated.children = [commentChild, brChild, hrChild, textChild]

    const updatedAgain = updateChildNodes(updated)
    expect(updatedAgain.element.childNodes).toHaveLength(4)
    expect(updatedAgain.element.childNodes[0]).toBe(commentChild.element)
    expect(updated.element.childNodes[1].nodeName).toBe(brChild.element.nodeName)
    expect(updatedAgain.element.childNodes[2]).toBe(hrChild.element)
    expect(updatedAgain.element.childNodes[3]).toBe(textChild.element)
    // original text was not updated
    expect(updatedAgain.element.childNodes[3].nodeValue).toBe(originalText)
  })

  test('updates by removing child nodes', () => {
    const divNode = document.createElement('div')
    const commentNode = document.createComment('This is a comment node')
    const textNode = document.createTextNode('This is a text node')
    const hrNode = document.createElement('hr')
    divNode.append(commentNode, textNode, hrNode)
    const originalItem = createDomItem({ nodeName: divNode.nodeName.toLowerCase(), element: divNode })
    const textChild = createDomItem({ nodeName: textNode.nodeName, nodeValue: textNode.nodeValue, element: textNode })
    originalItem.children = [textChild]

    expect(originalItem.element.childNodes).toHaveLength(3)
    const updatedItem = updateChildNodes(originalItem)
    expect(updatedItem.element.childNodes).toHaveLength(1)
    expect(updatedItem.element.childNodes[0]).toBe(textNode)
  })
  test('returns with empty children when no children are set', () => {
    const originalItem = createDomItem({ nodeName: 'div' })
    originalItem.children = null
    expect(originalItem.children).toBeNull()
    const updated = updateChildNodes(originalItem)
    expect(updated.children).toHaveLength(0)
  })

  test('children that swap places both stay in the page, in the new order (replaceChild used to drop one)', () => {
    const parent = updateChildNodes(createDomItem({
      tagName: 'ul',
      children: ['a', 'b', 'c'].map(name => ({ tagName: 'li', attributes: { className: name } }))
    }))
    const [a, b, c] = parent.children
    parent.children = [c, b, a]
    updateChildNodes(parent)
    expect(Array.from(parent.element.childNodes)).toEqual([c.element, b.element, a.element])
    expect(Array.from(parent.element.childNodes).map(node => node.className)).toEqual(['c', 'b', 'a'])
  })
})
