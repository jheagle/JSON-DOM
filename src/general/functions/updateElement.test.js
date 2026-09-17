/**
 * @jest-environment jsdom
 */
import 'core-js/stable'
import createDomItem from '../objects/createDomItem'
import updateElement from './updateElement'

describe('updateElement', () => {
  test('returns domItem with unchanged element when no element is set', () => {
    const originalItem = createDomItem()
    expect(originalItem.element).toBeNull()
    const updatedItem = updateElement(originalItem)
    expect(updatedItem.element).toBeInstanceOf(HTMLDivElement)
  })

  test('will create new element for changed nodeName', () => {
    const element = document.createElement('span')
    const item = createDomItem({
      element
    })
    expect(item.element).toBeInstanceOf(HTMLSpanElement)
    const updated = updateElement(item)
    expect(updated.element).toBeInstanceOf(HTMLDivElement)
  })

  test('can switch the nodeName and apply attributes', () => {
    const element = document.createElement('span')
    element.style.color = 'red'
    const item = createDomItem({
      attributes: {
        className: 'some-class',
        style: { color: 'red' }
      },
      element
    })
    expect(item.element).toBeInstanceOf(HTMLSpanElement)
    const updated = updateElement(item)
    expect(updated.element).toBeInstanceOf(HTMLDivElement)
    expect(updated.element.style.color).toBe('red')
    expect(updated.element.className).toBe('some-class')
  })

  test('can apply new class names in order', () => {
    const element = document.createElement('div')
    element.className = 'remove one two three'
    const item = createDomItem({
      attributes: {
        className: 'two one four three'
      },
      element
    })
    const updated = updateElement(item)
    expect(updated.element.className).toBe('one two three four')
  })

  test('can apply style changes', () => {
    const element = document.createElement('div')
    element.style.backgroundColor = 'white'
    element.style.color = 'black'
    const item = createDomItem({
      attributes: {
        style: {
          backgroundColor: 'black',
          color: 'white'
        }
      },
      element
    })
    const updated = updateElement(item)
    expect(updated.element.style.backgroundColor).toBe('black')
    expect(updated.element.style.color).toBe('white')
  })

  test('reattaches existing children when a standalone call regenerates the element for a nodeName change', () => {
    const oldElement = document.createElement('span')
    const childElement = document.createElement('em')
    oldElement.appendChild(childElement)
    const childItem = createDomItem({ nodeName: 'em', element: childElement })
    const item = createDomItem({
      element: oldElement,
      children: [childItem]
    })
    expect(item.element).toBeInstanceOf(HTMLSpanElement)

    const updated = updateElement(item)

    expect(updated.element).toBeInstanceOf(HTMLDivElement)
    expect(updated.element.contains(childElement)).toBe(true)
    expect(updated.children[0].element).toBe(childElement)
  })

  test('can update nodeValue', () => {
    const element = document.createTextNode('test')
    const item = createDomItem({
      nodeName: '#text',
      nodeValue: 'post-test',
      element
    })
    expect(item.element.nodeValue).toBe('test')
    const updated = updateElement(item)
    expect(updated.element.nodeValue).toBe('post-test')
  })
})
