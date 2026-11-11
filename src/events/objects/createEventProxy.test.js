/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createDomItem from '../../domItem/objects/createDomItem'
import createEventProxy from './createEventProxy'
import generateElement from '../../render/generateElement'

describe('createEventProxy', () => {
  test('has flag for immediate propagation stopped', () => {
    const item = generateElement(createDomItem({ nodeName: 'div' }))
    const proxyEvent = createEventProxy(new Event('click'), item)
    expect(proxyEvent).toHaveProperty('immediatePropagationStopped', false)
    proxyEvent.stopImmediatePropagation()
    expect(proxyEvent.immediatePropagationStopped).toBeTruthy()
  })

  test('event methods and accessors still work through the proxy', () => {
    const item = generateElement(createDomItem({ nodeName: 'div' }))
    const proxyEvent = createEventProxy(new Event('click', { cancelable: true }), item)
    expect(proxyEvent.type).toBe('click')
    expect(proxyEvent.defaultPrevented).toBe(false)
    proxyEvent.preventDefault()
    expect(proxyEvent.defaultPrevented).toBe(true)
    expect(proxyEvent.constructor).toBe(Event)
  })

  test('currentDomItemTarget is the item the listener is attached to', () => {
    const item = generateElement(createDomItem({ nodeName: 'div' }))
    const proxyEvent = createEventProxy(new Event('click'), item)
    expect(proxyEvent.currentDomItemTarget).toBe(item)
  })

  test('domItemTarget is the item itself when it fired directly on it', () => {
    const item = generateElement(createDomItem({ nodeName: 'div' }))
    const clickEvent = new Event('click')
    Object.defineProperty(clickEvent, 'target', { value: item.element })
    const proxyEvent = createEventProxy(clickEvent, item)
    expect(proxyEvent.domItemTarget).toBe(item)
  })

  test('domItemTarget resolves to the descendant which actually fired, when a listener is attached higher up (delegation)', () => {
    const parent = generateElement(createDomItem({ nodeName: 'div' }))
    const child = generateElement(createDomItem({ nodeName: 'span' }))
    parent.appendChild(child)
    // appendChild only links the item tree - the real elements need their own bubbling relationship for dispatch.
    parent.element.appendChild(child.element)
    let capturedEvent
    parent.element.addEventListener('click', (event) => { capturedEvent = event })
    child.element.dispatchEvent(new Event('click', { bubbles: true }))
    const proxyEvent = createEventProxy(capturedEvent, parent)
    expect(proxyEvent.currentDomItemTarget).toBe(parent)
    expect(proxyEvent.domItemTarget).toBe(child)
  })

  test('domItemTarget is null when the real target has no matching item in the subtree', () => {
    const item = generateElement(createDomItem({ nodeName: 'div' }))
    const strayElement = document.createElement('span')
    const clickEvent = new Event('click')
    Object.defineProperty(clickEvent, 'target', { value: strayElement })
    const proxyEvent = createEventProxy(clickEvent, item)
    expect(proxyEvent.domItemTarget).toBeNull()
  })
})
