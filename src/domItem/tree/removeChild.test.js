/**
 * @jest-environment jsdom
 */
import createDomItem from '../objects/createDomItem'
import { getItemById, registerItemIds } from './itemIdIndex'
import removeChild from './removeChild'
import updateElements from '../../render/updateElements'

describe('removeChild', () => {
  test('can remove a child', () => {
    const divItem = createDomItem({ type: 'div', parentItem: {} })
    const childItem = createDomItem({ type: 'p' })
    divItem.appendChild(childItem)
    updateElements(divItem)
    removeChild(divItem, childItem)
    expect(divItem.children.includes(childItem)).toBe(false)
  })

  test('unregisters the removed subtree from the root\'s own id index', () => {
    const divItem = createDomItem({ type: 'div', parentItem: {} })
    const childItem = createDomItem({ type: 'p' })
    const grandchildItem = createDomItem({ type: 'span' })
    childItem.appendChild(grandchildItem)
    divItem.appendChild(childItem)
    updateElements(divItem)
    registerItemIds(divItem)

    removeChild(divItem, childItem)

    expect(() => getItemById(divItem, childItem.id)).toThrow(/no item with id/i)
    expect(() => getItemById(divItem, grandchildItem.id)).toThrow(/no item with id/i)
  })
})
