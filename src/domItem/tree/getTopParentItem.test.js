/**
 * @jest-environment jsdom
 */
import createDomItem from '../objects/createDomItem'
import getTopParentItem from './getTopParentItem'

describe('getTopParentItem', () => {
  test('will find the top parent item for a given child item', () => {
    const divParent = createDomItem({ nodeName: 'div', parentItem: {}, attributes: { name: 'red' } })
    const divItem = createDomItem({ nodeName: 'div', parentItem: divParent })
    const spanItem = createDomItem({ nodeName: 'span', parentItem: divItem })
    divParent.appendChild(divItem)
    divItem.appendChild(spanItem)
    const topParent = getTopParentItem(spanItem)
    expect(topParent.attributes.name).toBe('red')
  })
})
