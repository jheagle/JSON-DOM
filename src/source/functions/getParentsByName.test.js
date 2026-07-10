/**
 * @jest-environment jsdom
 */
import createDomItem from '../objects/createDomItem.js'
import getParentsByName from './getParentsByName.js'

describe('getParentsByName', () => {
  test('will find the parent nodes with a specific name', () => {
    const divParent = createDomItem({ nodeName: 'div', parentItem: {}, attributes: { name: 'red' }})
    const divItem = createDomItem({ nodeName: 'div', parentItem: divParent })
    const spanItem = createDomItem({ nodeName: 'span', parentItem: divItem })
    divParent.appendChild(divItem)
    divItem.appendChild(spanItem)
    const redParents = getParentsByName('red', spanItem)
    expect(redParents.length).toBe(1)
    expect(redParents[0].attributes.name).toBe('red')
  })
})
