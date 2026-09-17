/**
 * @jest-environment jsdom
 */
import createDomItem from '../objects/createDomItem.js'
import renderHtml from './renderHtml.js'
import documentItem from '../objects/documentItem.js'
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
