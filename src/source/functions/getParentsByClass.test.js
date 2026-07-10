/**
 * @jest-environment jsdom
 */
import createDomItem from '../objects/createDomItem.js'
import getParentsByClass from './getParentsByClass.js'

describe('getParentsByClass', () => {
  test('will find the parent nodes with a specific class', () => {
    const divParent = createDomItem({ nodeName: 'div', parentItem: {},attributes: { className: 'red' }})
    const divItem = createDomItem({ nodeName: 'div' })
    const spanItem = createDomItem({ nodeName: 'span' })
    divParent.appendChild(divItem)
    divItem.appendChild(spanItem)
    const redParents = getParentsByClass('red', spanItem)
    expect(redParents.length).toBe(1)
    expect(redParents[0].attributes.className).toBe('red')
  })
})
