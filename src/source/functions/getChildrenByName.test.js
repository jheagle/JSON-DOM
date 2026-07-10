/**
 * @jest-environment jsdom
 */
import createDomItem from '../objects/createDomItem.js'
import getChildrenByName from './getChildrenByName.js'

describe('getChildrenByName', () => {
  test('will find all child nodes with a specific name', () => {
    const divItem = createDomItem({ nodeName: 'div', children: [
      createDomItem({ nodeName: 'span', attributes: { name: 'red' } }),
      createDomItem({ nodeName: 'span', attributes: { name: 'blue' } })
    ] })
    const redSpans = getChildrenByName('red', divItem)
    expect(redSpans.length).toBe(1)
    expect(redSpans[0].attributes.name).toBe('red')
  })
})
