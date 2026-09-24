/**
 * @jest-environment jsdom
 */
import createDomItem from '../objects/createDomItem'
import removeChild from './removeChild'
import updateElements from '../../render/updateElements'

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
