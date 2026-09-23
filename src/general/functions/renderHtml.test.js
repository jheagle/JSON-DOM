/**
 * @jest-environment jsdom
 */
import createDomItem from '../objects/createDomItem.js'
import renderHtml from './renderHtml.js'
import documentItem from '../objects/documentItem.js'
import documentDomItem from '../objects/documentDomItem.js'
import fullAddEventListener from '../../events/functions/fullAddEventListener.js'

describe('renderHtml', () => {
  test('returns with new element when none previously set', () => {
    const originalItem = createDomItem()
    expect(originalItem.element).toBeNull()
    const updated = renderHtml(originalItem)
    expect(updated.nodeName).toBe('div')
    expect(updated.element.nodeName.toLowerCase()).toBe('div')
    expect(updated.children).toHaveLength(0)
    expect(updated.parentItem.nodeName).toBe('body')
  })

  test('defaults to documentItem', () => {
    const originalItem = createDomItem({ type: 'div', properties: { id: 'test-div' } })
    documentItem.body.appendChild(originalItem)
    expect(originalItem.element).toBeNull()
    const updated = renderHtml()
    expect(updated).toBe(documentItem)
    expect(updated.body.children[0].nodeName).toBe('div')
    expect(updated.body.children[0].element.nodeName.toLowerCase()).toBe('div')
  })

  // The real bug this covers: battleship (a downstream consumer) builds its own document via documentDomItem (so
  // its eventActions - the registered listener functions - stay private, not on the public documentItem singleton),
  // then calls renderHtml(item, ownDocument.body) expecting it to append there. Before this fix, the second
  // argument was silently ignored and everything landed on the singleton instead - orphaning it from the document
  // (and its eventActions) the caller actually meant to render into.
  test('an explicit parent is used instead of the singleton documentItem, when given', () => {
    const ownDocument = documentDomItem({ someAction: () => 'ran' })
    const item = createDomItem({ nodeName: 'form' })
    const singletonChildrenBefore = documentItem.body.children.length

    const updated = renderHtml(item, ownDocument.body)

    expect(ownDocument.body.children).toContain(updated)
    expect(updated.parentItem).toBe(ownDocument.body)
    // nothing leaked onto the public singleton
    expect(documentItem.body.children.length).toBe(singletonChildrenBefore)
  })

  test('a listener survives a nodeName-driven re-render through the real pipeline, and children stay attached', () => {
    const clickFn = jest.fn()
    const childClickFn = jest.fn()

    const child = createDomItem({ nodeName: 'span' })
    let item = createDomItem({ nodeName: 'span', children: [child] })
    item = renderHtml(item)

    fullAddEventListener('click', clickFn, 'parentClick', undefined, undefined, item)
    fullAddEventListener('click', childClickFn, 'childClick', undefined, undefined, item.children[0])

    item.element.click()
    expect(clickFn).toHaveBeenCalledTimes(1)
    expect(childClickFn).toHaveBeenCalledTimes(0)

    item.children[0].element.click()
    // clicking the child bubbles up to the parent too
    expect(childClickFn).toHaveBeenCalledTimes(1)
    expect(clickFn).toHaveBeenCalledTimes(2)

    // trigger a nodeName change on the parent and re-render through the real pipeline
    item.nodeName = 'button'
    item = renderHtml(item)

    expect(item.element.nodeName.toLowerCase()).toBe('button')
    // the child's real element should still be attached under the regenerated parent element
    expect(item.element.contains(item.children[0].element)).toBe(true)

    item.children[0].element.click()
    // still bubbles after the re-render: both listeners fire exactly once more, not zero and not twice
    expect(childClickFn).toHaveBeenCalledTimes(2)
    expect(clickFn).toHaveBeenCalledTimes(3)
  })
})
