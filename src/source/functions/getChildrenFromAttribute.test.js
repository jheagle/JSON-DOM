/**
 * @jest-environment jsdom
 */
import createDomItem from '../objects/createDomItem.js'
import getChildrenFromAttribute from './getChildrenFromAttribute.js'

describe('getChildrenFromAttribute', () => {
  test('will find all child nodes with a specific attribute', () => {
    const divItem = createDomItem({ nodeName: 'div', children: [
      createDomItem({ nodeName: 'span', attributes: { name: 'red' } }),
      createDomItem({ nodeName: 'span', attributes: { name: 'blue' } })
    ] })
    const redSpans = getChildrenFromAttribute('name', 'red', divItem)
    expect(redSpans.length).toBe(1)
    expect(redSpans[0].attributes.name).toBe('red')
  })
})
