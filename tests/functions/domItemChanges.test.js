/**
 * @jest-environment jsdom
 */
import domItemChanges from '../../src/source/functions/domItemChanges.js'
import createDomItem from '../../src/source/objects/createDomItem.js'
import generateElement from '../../src/source/functions/generateElement'

test('returns original domItem if element is not set', () => {
  const item = {}
  expect(domItemChanges(item)).toBe(item)
})

test('will create new element when it does not yet exist', () => {
  const item = createDomItem()
  expect(item.element).not.toBeInstanceOf(HTMLDivElement)
  const changes = domItemChanges(item)
  expect(changes.element).toBeInstanceOf(HTMLDivElement)
})

test('will return changed or added attributes', () => {
  const item = generateElement(createDomItem({
    attributes: {
      title: 'test',
      height: '600px',
      width: '1000px'
    }
  }
  ))
  const newHeight = '400px'
  const innerHtml = '<span>Inner div</span>'
  item.attributes = {
    height: newHeight,
    title: 'test',
    innerHtml: innerHtml
  }
  const changes = domItemChanges(item)
  expect(changes.attributes).not.toHaveProperty('title')
  expect(changes.attributes).toHaveProperty('height')
  expect(changes.attributes.height).toBe(newHeight)
  expect(changes.attributes).toHaveProperty('innerHtml')
  expect(changes.attributes.innerHtml).toBe(innerHtml)
})

test('will return changed or added class names', () => {
  const item = generateElement(createDomItem({
    attributes: {
      className: 'remove one two three'
    }
  }
  ))
  item.attributes = {
    className: 'two one four three'
  }
  const changes = domItemChanges(item)
  expect(changes.attributes.className).toBe('one two three four')
})

test('will return changed or added styles', () => {
  const item = generateElement(createDomItem({
    attributes: {
      style: { display: 'none', color: 'white', top: 0 }
    }
  }
  ))
  item.attributes = {
    style: { bottom: 0, display: 'block', color: 'white' }
  }
  const changes = domItemChanges(item)
  expect(changes.attributes.style).toHaveProperty('display')
  expect(changes.attributes.style.display).toBe('block')
  expect(changes.attributes.style).not.toHaveProperty('color')
  expect(changes.attributes.style).not.toHaveProperty('top')
  expect(changes.attributes.style).toHaveProperty('bottom')
  expect(changes.attributes.style.bottom).toBe(0)
})

test('will remove backgroundColor style which is same as background-color', () => {
  const item = generateElement(createDomItem({
    attributes: {
      style: { color: 'white', backgroundColor: 'black' }
    }
  }
  ))
  item.attributes = {
    style: { color: 'blue', backgroundColor: 'black' }
  }
  const changes = domItemChanges(item)
  expect(changes.attributes.style).toHaveProperty('color')
  expect(changes.attributes.style.color).toBe('blue')
  expect(changes.attributes.style).not.toHaveProperty('backgroundColor')
})
