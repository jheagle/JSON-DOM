/**
 * @jest-environment jsdom
 */
import createDomItem from '../objects/createDomItem.js'
import removeChild from './removeChild.js'
import updateElements from './updateElements.js'

describe('removeChild', () => {
  test('can remove a child', () => {
    const divItem = createDomItem({ type: 'div' })
    const childItem = createDomItem({ type: 'p' })
    divItem.appendChild(childItem)
    updateElements(divItem)
    removeChild(divItem, childItem)
    expect(divItem.children.includes(childItem)).toBe(false)
  })
})
