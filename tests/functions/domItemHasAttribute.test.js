/**
 * @jest-environment jsdom
 */
import domItemHasAttribute from '../../src/source/functions/domItemHasAttribute.js'
import createDomItem from '../../src/source/objects/createDomItem'
import elementHasAttribute from '../../src/source/functions/elementHasAttribute'

test('returns false when invalid DomItem', () => {
  const item = {}
  expect(domItemHasAttribute(item, 'height', '400px')).toBe(false)
})

test('will detect when an attribute is set with value', () => {
  const item = createDomItem({ attributes: { height: '400px' } })
  expect(domItemHasAttribute(item, 'height', '400px')).toBe(true)
})

test('will return false when the attribute is set with different value', () => {
  const item = createDomItem({ attributes: { height: '600px' } })
  expect(domItemHasAttribute(item, 'height', '400px')).toBe(false)
})

test('compare current style with configured style', () => {
  document.body.innerHTML = '<div style=\'display: block\'></div>'
  const element = document.getElementsByTagName('div')[0]
  const item = createDomItem({ attributes: { style: { display: 'block' } } })
  expect(domItemHasAttribute(item, 'style', element.style)[0].result).toEqual([0, 0])
})

test('compare current className with configured className', () => {
  const item = createDomItem({ attributes: { className: 'one two three' } })
  const className = 'two one three'
  const results = domItemHasAttribute(item, 'className', className)
  const sameArray = [0, 0]
  expect(results[0].result).toEqual(sameArray)
  expect(results[1].result).toEqual(sameArray)
  expect(results[2].result).toEqual(sameArray)
})

test('will compare same keys with different casing as same', () => {
  document.body.innerHTML = '<div style=\'background-color: black\'></div>'
  const element = document.getElementsByTagName('div')[0]
  const item = createDomItem({ attributes: { style: { backgroundColor: 'black' } } })
  expect(domItemHasAttribute(item, 'style', element.style)[0].result).toEqual([0, 0])
})
