/**
 * @jest-environment jsdom
 */
import elementChanges from './elementChanges.js'
import createDomItem from '../objects/createDomItem.js'

describe('elementChanges', () => {
  test('returns empty change list if element is not set', () => {
    const changes = elementChanges(createDomItem())
    expect(changes.removed).toEqual({ nodeName: 'div' })
    expect(changes.added).toEqual({})
  })

  test('detects changed element node name', () => {
    const oldNodeName = 'span'
    const item = createDomItem({ nodeName: oldNodeName })
    const newNodeName = 'div'
    item.element = document.createElement(newNodeName)
    const changes = elementChanges(item)
    expect(changes.removed.nodeName).toBe(oldNodeName)
    expect(changes.added.nodeName).toBe(newNodeName)
  })

  test('switch node value returns immediately', () => {
    const oldNodeName = 'div'
    const oldAttribute = 'not a div'
    const item = createDomItem({ nodeName: oldNodeName, attributes: { name: oldAttribute } })
    const newNodeValue = 'Hello World!'
    item.element = document.createTextNode(newNodeValue)
    const changes = elementChanges(item)
    expect(changes.removed).toEqual({
      nodeName: oldNodeName,
      'attributes.name': oldAttribute
    })
    expect(changes.added).toEqual({
      nodeName: '#text',
      nodeValue: newNodeValue
    })
  })

  test('null element with prior nodeValue, removes the nodeValue', () => {
    const oldNodeName = '#text'
    const oldAttribute = 'not a div'
    const oldNodeValue = 'Hello World!'
    const item = createDomItem({ nodeName: oldNodeName, nodeValue: oldNodeValue, attributes: { name: oldAttribute } })
    const changes = elementChanges(item)
    expect(changes.removed).toEqual({
      nodeName: oldNodeName,
      nodeValue: oldNodeValue,
      'attributes.name': oldAttribute
    })
  })

  test('will return changed or added attributes', () => {
    const item = createDomItem({
        attributes: {
          title: 'test',
          height: '600px',
          width: '1000px'
        }
      }
    )
    item.element = document.createElement(item.nodeName)
    item.element.setAttribute('title', 'test')
    const newHeight = '400px'
    item.element.setAttribute('height', newHeight)
    item.element.setAttribute('width', '1000px')
    const changes = elementChanges(item)
    expect(changes.added['attributes.title']).toBeUndefined()
    expect(changes.added['attributes.height']).toBe(newHeight)
  })

  test('will return all attributes as removed when element is null', () => {
    const attributes = {
      title: 'test',
      height: '400px',
      width: '1000px',
      className: 'one two three four',
      style: { bottom: 0, display: 'block', color: 'white' }
    }
    const item = createDomItem({
        attributes: attributes
      }
    )
    const changes = elementChanges(item)
    const convertedAttributes = functionalHelpers.dotNotate({ attributes: attributes })
    convertedAttributes.nodeName = item.nodeName
    expect(changes.removed).toEqual(convertedAttributes)
    expect(changes.added).toEqual({})
  })

  test('will return changed or added class names', () => {
    const item = createDomItem({
        attributes: {
          className: 'remove one two three'
        }
      }
    )
    item.element = document.createElement(item.nodeName)
    item.element.className = 'two one four three'
    const changes = elementChanges(item)
    // After diff, intended classname will be: 'one two three four'
    expect(changes.removed['attributes.className.0']).toBe('remove')
    expect(changes.added['attributes.className.2']).toBe('four')
  })

  test('will return changed or added styles', () => {
    const item = createDomItem({
        attributes: {
          style: { display: 'none', color: 'white', top: 0 }
        }
      }
    )
    item.element = document.createElement(item.nodeName)
    item.element.style.bottom = '0'
    item.element.style.display = 'block'
    item.element.style.color = 'white'
    const changes = elementChanges(item)
    expect(changes.removed).toEqual({
      'attributes.style.display': 'none',
      'attributes.style.top': 0
    })
    expect(changes.added).toEqual({
      'attributes.style.bottom': '0px',
      'attributes.style.display': 'block'
    })
  })

  test('will ignore backgroundColor style which is same as background-color', () => {
    const item = createDomItem({
        attributes: {
          style: { color: 'white', backgroundColor: 'black' }
        }
      }
    )
    item.element = document.createElement(item.nodeName)
    item.element.style.color = 'blue'
    item.element.style.backgroundColor = 'black'
    const changes = elementChanges(item)
    expect(changes.removed).toEqual({
      'attributes.style.color': 'white'
    })
    expect(changes.added).toEqual({
      'attributes.style.color': 'blue'
    })
  })

  test('uses correct case-format for dom Item changes', () => {
    const item = createDomItem({
        attributes: {
          style: { backgroundColor: 'black' }
        }
      }
    )
    item.element = document.createElement(item.nodeName)
    const dataTestValue = 'data set key'
    item.element.setAttribute('data-test', dataTestValue)
    item.element.style.backgroundColor = 'white'
    const changes = elementChanges(item)
    expect(changes.removed).toEqual({
      'attributes.style.backgroundColor': 'black'
    })
    expect(changes.added).toEqual({
      'attributes.style.backgroundColor': 'white',
      'attributes.dataTest': dataTestValue
    })
  })
})
