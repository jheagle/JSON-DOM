/**
 * @jest-environment jsdom
 */
import domItemChanges from './domItemChanges.js'
import createDomItem from '../objects/createDomItem.js'
import generateElement from './generateElement'

describe('domItemChanges', () => {
  test('returns empty change list if element is not set', () => {
    const changes = domItemChanges(createDomItem())
    expect(changes.removed).toEqual({})
    expect(changes.added).toEqual({})
  })

  test('will create new element when it does not yet exist', () => {
    const element = document.createElement('span')
    const item = createDomItem({
      element: element
    })
    const changes = domItemChanges(item)
    expect(changes.removed.nodeName).toEqual('div')
    expect(changes.added.nodeName).toEqual('span')
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
        element: element
      }
    )
    const changes = domItemChanges(item)
    expect(changes.added['title']).toBeUndefined()
    expect(changes.added['height']).toBe(newHeight)
  })

  test('will return changed or added class names', () => {
    const element = document.createElement('div')
    element.className = 'remove one two three'
    const item = createDomItem({
        attributes: {
          className: 'two one four three'
        },
        element: element
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
        element: element
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
        element: element
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
    const item = generateElement(createDomItem({ nodeName: '#text', nodeValue: 'inner text' }))
    const newInner = 'new inner text'
    item.element.nodeValue = newInner
    let changes = domItemChanges(item)
    expect(changes.nodeValue).toEqual(newInner)
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
        element: element
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
