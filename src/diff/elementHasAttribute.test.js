/**
 * @jest-environment jsdom
 */
import elementHasAttribute from './elementHasAttribute.js'

describe('elementHasAttribute', () => {
  test('will detect when an attribute is set with value', () => {
    document.body.innerHTML = '<div></div>'
    const element = document.getElementsByTagName('div')[0]
    element.setAttribute('height', '400px')
    expect(elementHasAttribute(element, 'height', '400px')).toBe(0)
  })

  test('will return false when the attribute is set with different value', () => {
    document.body.innerHTML = '<div></div>'
    const element = document.getElementsByTagName('div')[0]
    element.setAttribute('height', '600px')
    expect(elementHasAttribute(element, 'height', '400px')).toBe(1)
  })

  test('compare current style with configured style', () => {
    document.body.innerHTML = '<div style="display: block"></div>'
    const element = document.getElementsByTagName('div')[0]
    const styleTest = { display: 'block' }
    expect(elementHasAttribute(element, 'style', styleTest)[0].result).toEqual([0, 0])
  })

  test('compare current className with configured className', () => {
    document.body.innerHTML = '<div class="one two three"></div>'
    const element = document.getElementsByTagName('div')[0]
    const className = 'two one three'
    const results = elementHasAttribute(element, 'class', className)
    const sameArray = [0, 0]
    expect(results[0].result).toEqual(sameArray)
    expect(results[1].result).toEqual(sameArray)
    expect(results[2].result).toEqual(sameArray)
  })

  test('will compare same keys with different casing as same', () => {
    document.body.innerHTML = '<div style=\'background-color: black\'></div>'
    const element = document.getElementsByTagName('div')[0]
    const results = elementHasAttribute(element, 'style', { backgroundColor: 'black' })
    const sameArray = [0, 0]
    expect(results[0].result).toEqual(sameArray)
  })

  test('finds same-named custom attribute', () => {
    document.body.innerHTML = '<div custom-app="start"></div>'
    const element = document.getElementsByTagName('div')[0]
    expect(elementHasAttribute(element, 'customApp', 'start')).toBe(0)
  })

  test('detects when all styles are newly added', () => {
    document.body.innerHTML = '<div></div>'
    const element = document.getElementsByTagName('div')[0]
    expect(elementHasAttribute(element, 'style', { backgroundColor: 'black' })).toBe(1)
  })

  test('detects when all class names are newly added', () => {
    document.body.innerHTML = '<div></div>'
    const element = document.getElementsByTagName('div')[0]
    expect(elementHasAttribute(element, 'class', 'all new class-names')).toBe(1)
  })
})
