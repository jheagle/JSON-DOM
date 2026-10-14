/**
 * @jest-environment jsdom
 */
import domItemHasAttribute from './domItemHasAttribute'
import createDomItem from '../domItem/objects/createDomItem'

describe('domItemHasAttribute', () => {
  test('will detect when an attribute is set with value', () => {
    const item = createDomItem({ attributes: { height: '400px' } })
    expect(domItemHasAttribute(item, 'height', '400px')).toBe(0)
  })

  test('will return false when the attribute is set with different value', () => {
    const item = createDomItem({ attributes: { height: '600px' } })
    expect(domItemHasAttribute(item, 'height', '400px')).toBe(1)
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

  test('detects when all styles are newly added', () => {
    document.body.innerHTML = '<div style=\'background-color: black\'></div>'
    const element = document.getElementsByTagName('div')[0]
    const item = createDomItem({ attributes: {} })
    expect(domItemHasAttribute(item, 'style', element.style)).toBe(1)
  })

  test('detects when all class names are newly added', () => {
    document.body.innerHTML = '<div class=\'all new class-names\'></div>'
    const element = document.getElementsByTagName('div')[0]
    const item = createDomItem({ attributes: {} })
    expect(domItemHasAttribute(item, 'className', element.className)).toBe(1)
  })
})
