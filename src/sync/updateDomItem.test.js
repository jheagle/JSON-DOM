/**
 * @jest-environment jsdom
 */
import 'core-js/stable'
import createDomItem from '../domItem/objects/createDomItem'
import updateDomItem from './updateDomItem'

describe('updateDomItem', () => {
  test('returns unchanged domItem when no element is set', () => {
    const originalItem = createDomItem()
    expect(updateDomItem(originalItem)).toBe(originalItem)
  })

  test('will create new element for changed nodeName', () => {
    const element = document.createElement('div')
    const item = createDomItem({
      nodeName: 'span',
      element
    })
    const updated = updateDomItem(item)
    expect(updated.nodeName).toBe('div')
  })

  test('can switch the nodeName and apply attributes', () => {
    const element = document.createElement('div')
    element.className = 'some-class'
    element.style.color = 'red'
    const item = createDomItem({
      nodeName: 'span',
      attributes: {
        style: { color: 'red' }
      },
      element
    })
    const updated = updateDomItem(item)
    expect(updated.nodeName).toBe('div')
    expect(updated.attributes.style.color).toBe('red')
    expect(updated.attributes.className).toBe('some-class')
  })

  test('can apply new class names in order', () => {
    const element = document.createElement('div')
    element.className = 'two one four three'
    const item = createDomItem({
      attributes: {
        className: 'remove one two three'
      },
      element
    })
    const updated = updateDomItem(item)
    expect(updated.attributes.className).toBe('one two three four')
  })

  test('can apply style changes', () => {
    const element = document.createElement('div')
    element.style.backgroundColor = 'black'
    element.style.color = 'white'
    const item = createDomItem({
      attributes: {
        style: {
          backgroundColor: 'white',
          color: 'black'
        }
      },
      element
    })
    const updated = updateDomItem(item)
    expect(updated.attributes.style.backgroundColor).toBe('black')
    expect(updated.attributes.style.color).toBe('white')
  })

  test('can update nodeValue', () => {
    const element = document.createTextNode('post-test')
    const item = createDomItem({
      nodeName: '#text',
      nodeValue: 'test',
      element
    })
    const updated = updateDomItem(item)
    expect(updated.nodeValue).toBe('post-test')
  })
})
