/**
 * @jest-environment jsdom
 */
import createDomItem from '../domItem/objects/createDomItem'
import renderHtml from './renderHtml'
import documentItem from '../domItem/objects/documentItem'
import documentDomItem from '../domItem/objects/documentDomItem'
import fullAddEventListener from '../events/functions/fullAddEventListener'
import updateDomItems from '../sync/updateDomItems'

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

  // The real scenario this covers: dropping json-dom content into a page which already has real, hand-authored
  // HTML (see updateDomItems for capturing that content into items first) - a header/menu that needs to render
  // BEFORE the existing content, not after it.
  test('an index inserts item among an already-rendered parent\'s existing children, at that position', () => {
    const parent = createDomItem({ nodeName: 'body' })
    const existingFirst = renderHtml(createDomItem({ nodeName: 'main' }), parent)
    const existingSecond = renderHtml(createDomItem({ nodeName: 'footer' }), parent)

    const header = createDomItem({ nodeName: 'header' })
    const updated = renderHtml(header, parent, 0)

    expect(parent.children).toEqual([header, existingFirst, existingSecond])
    expect(updated.parentItem).toBe(parent)
    expect(Array.from(parent.element.children).map(el => el.nodeName.toLowerCase())).toEqual(['header', 'main', 'footer'])
  })

  // The real bug this covers: a page with hand-authored HTML that some *other* script (outside json-dom entirely,
  // e.g. a plugin doing its own direct DOM manipulation) sets an inline style on directly. Capturing that HTML into
  // items via updateDomItems, then inserting a new item ahead of it, must not touch that untracked style -
  // renderHtml used to walk and re-sync parent's whole existing subtree as a side effect of positioning the new
  // item, reverting anything about existing siblings that json-dom's own items never knew about.
  test('inserting an item does not revert an untracked style on an already-rendered sibling', () => {
    const parent = createDomItem({ nodeName: 'body' })
    parent.element = document.createElement('body')

    const existingReal = document.createElement('h4')
    existingReal.textContent = 'Some title'
    parent.element.appendChild(existingReal)
    // Something outside json-dom (a third-party script) sets this directly on the real element - json-dom's own
    // items are never told about it.
    existingReal.style.display = 'none'

    updateDomItems(parent)

    const header = createDomItem({ nodeName: 'header' })
    renderHtml(header, parent, 0)

    expect(existingReal.getAttribute('style')).toBe('display: none;')
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
