/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import treeloom from '../main'
import { forgetApplied } from './appliedSnapshot'

/**
 * Run fn and return every DOM mutation it caused, as "attribute: old -> new" (or the node changes).
 * @param fn
 */
const mutationsDuring = async (fn) => {
  const records = []
  const observer = new MutationObserver(list => records.push(...list))
  observer.observe(document.body, { subtree: true, attributes: true, attributeOldValue: true, childList: true, characterData: true })
  fn()
  await new Promise(resolve => setTimeout(resolve, 0))
  records.push(...observer.takeRecords())
  observer.disconnect()
  return records.map(record => record.type === 'attributes'
    ? `${record.attributeName}: ${record.oldValue} -> ${record.target.getAttribute(record.attributeName)}`
    : record.type)
}

const render = attributes => treeloom.renderHtml(treeloom.createDomItem({ tagName: 'div', attributes }))

afterEach(() => {
  document.body.innerHTML = ''
})

describe('an update compares with what treeloom last wrote, not with what the browser reports back', () => {
  test.each([
    ['a hex colour (the browser reports rgb)', { style: { backgroundColor: '#333' } }],
    ['a shorthand colour (the browser reports longhands)', { style: { borderColor: '#333' } }],
    ['a full shorthand', { style: { border: '1px solid #333' } }],
    ['a named colour', { style: { outline: '3px solid yellow' } }],
    ['class names', { className: 'column valid-target' }],
    ['plain attributes and properties', { 'aria-label': 'A1, ship', role: 'gridcell', tabIndex: 0, textContent: 'x' }],
  ])('an update with nothing changed writes nothing: %s', async (label, attributes) => {
    const item = render(attributes)
    expect(await mutationsDuring(() => treeloom.updateElement(item))).toEqual([])
    expect(await mutationsDuring(() => treeloom.updateElement(item))).toEqual([])
  })

  test('a changed style value is written once, and only that property', async () => {
    const item = render({ style: { backgroundColor: '#333', borderColor: '#333' } })
    item.attributes.style.backgroundColor = '#fff'
    expect(await mutationsDuring(() => treeloom.updateElement(item))).toHaveLength(1)
    expect(item.element.style.backgroundColor).toBe('rgb(255, 255, 255)')
    expect(item.element.style.borderColor).toBe('rgb(51, 51, 51)')
  })

  test('a style property dropped from the item is removed from the element', async () => {
    const item = render({ style: { backgroundColor: '#333', outline: 'none' } })
    delete item.attributes.style.backgroundColor
    await mutationsDuring(() => treeloom.updateElement(item))
    expect(item.element.style.backgroundColor).toBe('')
    expect(item.element.style.outline).toBe('none')
  })

  test('class names added and removed', async () => {
    const item = render({ className: 'player role-target' })
    item.attributes.className = 'player role-own picked'
    await mutationsDuring(() => treeloom.updateElement(item))
    expect(Array.from(item.element.classList).sort()).toEqual(['picked', 'player', 'role-own'])
  })

  test('a changed attribute and property are written', async () => {
    const item = render({ 'aria-label': 'A1', textContent: 'before' })
    item.attributes['aria-label'] = 'A1, hit'
    item.attributes.textContent = 'after'
    await mutationsDuring(() => treeloom.updateElement(item))
    expect(item.element.getAttribute('aria-label')).toBe('A1, hit')
    expect(item.element.textContent).toBe('after')
  })

  test('a change another script makes on the element directly is left alone (the item is the source of truth)', async () => {
    const item = render({ style: { backgroundColor: '#333' } })
    item.element.style.color = 'red'
    expect(await mutationsDuring(() => treeloom.updateElement(item))).toEqual([])
    expect(item.element.style.color).toBe('red')
  })

  test('an element treeloom never wrote is compared with the element itself, then remembered', async () => {
    const item = render({ style: { backgroundColor: '#333' } })
    forgetApplied(item.element)
    item.element.style.backgroundColor = 'red'
    // No snapshot: compared with the element (red), so the item's value is written back
    await mutationsDuring(() => treeloom.updateElement(item))
    expect(item.element.style.backgroundColor).toBe('rgb(51, 51, 51)')
    expect(await mutationsDuring(() => treeloom.updateElement(item))).toEqual([])
  })

  test('a changed nodeName still replaces the element, and the new one is remembered too', async () => {
    const item = render({ className: 'a', style: { backgroundColor: '#333' } })
    const before = item.element
    item.nodeName = 'span'
    item.tagName = 'span'
    treeloom.updateElement(item)
    expect(item.element).not.toBe(before)
    expect(item.element.nodeName).toBe('SPAN')
    expect(item.element.className).toBe('a')
    expect(await mutationsDuring(() => treeloom.updateElement(item))).toEqual([])
  })

  test('nothing is added to the item itself (the snapshot never travels in JSON)', () => {
    const item = render({ style: { backgroundColor: '#333' } })
    const keysBefore = Object.keys(item).sort()
    treeloom.updateElement(item)
    expect(Object.keys(item).sort()).toEqual(keysBefore)
  })

  test('a controlled input: what was typed is put back to the item\'s value on the next update, as before', async () => {
    const item = treeloom.renderHtml(treeloom.createDomItem({ tagName: 'input', attributes: { type: 'text', value: '' } }))
    item.element.value = 'typed'
    treeloom.updateElement(item)
    expect(item.element.value).toBe('')
  })

  test('a controlled checkbox: a click is put back to the item\'s checked state on the next update, as before', async () => {
    const item = treeloom.renderHtml(treeloom.createDomItem({ tagName: 'input', attributes: { type: 'checkbox', checked: false } }))
    item.element.checked = true
    treeloom.updateElement(item)
    expect(item.element.checked).toBe(false)
  })

  test('sync then revert: after updateDomItem adopts a direct change, setting the item back writes it again', async () => {
    const item = render({ style: { color: 'red' } })
    item.element.style.color = 'blue'
    treeloom.updateDomItem(item)
    expect(item.attributes.style.color).toBe('blue')
    item.attributes.style.color = 'red'
    treeloom.updateElement(item)
    expect(item.element.style.color).toBe('red')
  })
})
