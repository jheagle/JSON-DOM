const LinkedTreeList = require('../../../src/js/collections/LinkedTreeList')
const nodeListFactory = require('../../../src/js/pseudoDom/class/PseudoNodeList').nodeListFactory
const generateNode = require('../../../src/js/pseudoDom/class/PseudoNode').generateNode

test('NodeList can store elements', () => {
  const arrayData = ['one', 'two', 'three', 'four']
  const innerList = LinkedTreeList.fromArray(arrayData, generateNode())
  const someList = nodeListFactory(innerList)
  expect(someList.length).toBe(4)
  expect(Array.from(someList).map(node => node.nodeValue)).toEqual(arrayData)
})
