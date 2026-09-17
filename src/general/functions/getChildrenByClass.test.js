/**
 * @jest-environment jsdom
 */
import createDomItem from '../objects/createDomItem.js'
import getChildrenByClass from './getChildrenByClass.js'

describe('getChildrenByClass', () => {
  test('will find all child nodes with a specific class', () => {
    const divItem = createDomItem({
      nodeName: 'div',
      children: [
        createDomItem({ nodeName: 'span', attributes: { className: 'red' } }),
        createDomItem({ nodeName: 'span', attributes: { className: 'blue' } })
      ]
    })
    const redSpans = getChildrenByClass('red', divItem)
    expect(redSpans.length).toBe(1)
    expect(redSpans[0].attributes.className).toBe('red')
  })
})
