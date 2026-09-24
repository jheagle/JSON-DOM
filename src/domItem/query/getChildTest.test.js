/**
 * @jest-environment jsdom
 */
import createDomItem from '../objects/createDomItem.js'
import getChildTest from './getChildTest.js'

describe('getChildTest', () => {
  test('will find the child node with a specific attribute', () => {
    const divItem = createDomItem({ nodeName: 'div', attributes: { name: 'red' } })
    const redDivs = getChildTest('name', 'red')(divItem, [])
    expect(redDivs.length).toBe(1)
    expect(redDivs[0].attributes.name).toBe('red')
  })
})
