/**
 * @jest-environment jsdom
 */
import 'core-js/stable'
import createDomItem from '../objects/createDomItem.js'
import updateChildren from './updateChildren.js'

describe('updateChildren', () => {
  test('will update the order of the children for the domItem', () => {
    const element = document.createElement('div')
    const comment = 'This is a comment node'
    const text = 'This is a text node'
    const childElement = 'hr'
    element.innerHTML = `<!--${comment}-->${text}<${childElement}>`
    const originalItem = createDomItem({ element: element })
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
})
