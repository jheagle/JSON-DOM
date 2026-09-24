/**
 * @jest-environment jsdom
 */
import domItemChanges from './domItemChanges.js'
import createDomItem from '../domItem/objects/createDomItem.js'

describe('domItemChanges', () => {
  test('returns empty change list if element is not set', () => {
    const changes = domItemChanges(createDomItem())
    expect(changes.removed).toEqual({})
    expect(changes.added).toEqual({ nodeName: 'div' })
  })

  test('will get the nodeName changes when they are different', () => {
    const element = document.createElement('span')
    const item = createDomItem({
      element
    })
    const changes = domItemChanges(item)
    expect(changes.removed.nodeName).toEqual('span')
    expect(changes.added.nodeName).toEqual('div')
  })

  test('will return changed or added attributes', () => {
    const element = document.createElement('div')
    element.setAttribute('title', 'test')
    element.setAttribute('height', '600px')
    element.setAttribute('width', '1000px')
    const newHeight = '400px'
    const item = createDomItem({
      attributes: {
        title: 'test',
        height: newHeight,
        width: '1000px'
      },
      element
    }
    )
    const changes = domItemChanges(item)
    expect(changes.added.title).toBeUndefined()
    expect(changes.added.height).toBe(newHeight)
  })

  test('will return all attributes as added when element is null', () => {
    const attributes = {
      title: 'test',
      height: '400px',
      width: '1000px',
      className: 'one two three four',
      style: { bottom: 0, display: 'block', color: 'white' }
    }
    const item = createDomItem({
      attributes
    }
    )
    const changes = domItemChanges(item)
    attributes.nodeName = item.nodeName
    expect(changes.removed).toEqual({})
    expect(changes.added).toEqual(attributes)
  })

  test('will return changed or added class names', () => {
    const element = document.createElement('div')
    element.className = 'remove one two three'
    const item = createDomItem({
      attributes: {
        className: 'two one four three'
      },
      element
    }
    )
    const changes = domItemChanges(item)
    // After diff, intended classname will be: 'one two three four'
    expect(changes.removed['class.0']).toBe('remove')
    expect(changes.added['class.2']).toBe('four')
  })

  test('will return changed or added styles', () => {
    const element = document.createElement('div')
    element.style.display = 'none'
    element.style.color = 'white'
    element.style.top = '0'
    const item = createDomItem({
      attributes: {
        style: { bottom: 0, display: 'block', color: 'white' }
      },
      element
    }
    )
    const changes = domItemChanges(item)
    expect(changes.removed).toEqual({
      'style.display': 'none',
      'style.top': '0px'
    })
    expect(changes.added).toEqual({
      'style.bottom': 0,
      'style.display': 'block'
    })
  })

  test('will ignore background-color style which is same as backgroundColor', () => {
    const element = document.createElement('div')
    element.style.color = 'white'
    element.style['background-color'] = 'black'
    const item = createDomItem({
      attributes: {
        style: { color: 'blue', backgroundColor: 'black' }
      },
      element
    }
    )
    const changes = domItemChanges(item)
    expect(changes.removed).toEqual({
      'style.color': 'white'
    })
    expect(changes.added).toEqual({
      'style.color': 'blue'
    })
  })

  test('will detect changes to node value', () => {
    const oldInner = 'inner text'
    const element = document.createTextNode(oldInner)
    const newInner = 'new inner text'
    const item = createDomItem({ nodeName: '#text', nodeValue: newInner, element })
    const changes = domItemChanges(item)
    expect(changes.removed.nodeValue).toEqual(oldInner)
    expect(changes.added.nodeValue).toEqual(newInner)
  })

  test('null element still gets node value', () => {
    const newInner = 'new inner text'
    const newAttribute = 'not a div'
    const item = createDomItem({ nodeName: '#text', nodeValue: newInner, attributes: { name: newAttribute } })
    const changes = domItemChanges(item)
    expect(changes.removed).toEqual({})
    expect(changes.added.nodeValue).toEqual(newInner)
    expect(changes.added.name).toEqual(newAttribute)
  })

  test('uses correct case-format for element changes', () => {
    const element = document.createElement('div')
    element.style['background-color'] = 'black'
    const dataTestValue = 'data set key'
    const item = createDomItem({
      attributes: {
        dataTest: dataTestValue,
        style: { backgroundColor: 'white' }
      },
      element
    }
    )
    const changes = domItemChanges(item)
    expect(changes.removed).toEqual({
      'style.background-color': 'black'
    })
    expect(changes.added).toEqual({
      'style.background-color': 'white',
      'data-test': dataTestValue
    })
  })
})
