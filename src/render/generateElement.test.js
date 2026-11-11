/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createDomItem from '../domItem/objects/createDomItem'
import generateElement from './generateElement'

describe('generateElement', () => {
  test('can create an HTMLElement', () => {
    const item = createDomItem({ nodeName: 'div' })
    const elementCreated = generateElement(item)
    expect(elementCreated.element).toBeInstanceOf(HTMLDivElement)
  })

  test('can create a Text Node', () => {
    const item = createDomItem({ nodeName: '#text', nodeValue: 'This is the text' })
    const nodeCreated = generateElement(item)
    expect(nodeCreated.element).toBeInstanceOf(Text)
    expect(nodeCreated.element.nodeValue).toBe(nodeCreated.nodeValue)
  })

  test('can create a Comment Node', () => {
    const item = createDomItem({ nodeName: '#comment', nodeValue: 'This is the comment' })
    const nodeCreated = generateElement(item)
    expect(nodeCreated.element).toBeInstanceOf(Comment)
    expect(nodeCreated.element.nodeValue).toBe(nodeCreated.nodeValue)
  })

  test('gives a customized built-in element its name when it is created (the native is attribute)', () => {
    class FancyButton extends HTMLButtonElement {}
    customElements.define('fancy-button', FancyButton, { extends: 'button' })
    const item = generateElement(createDomItem({ nodeName: 'button', attributes: { is: 'fancy-button' } }))
    expect(item.element).toBeInstanceOf(FancyButton)
    expect(item.element.getAttribute('is')).toBe('fancy-button')
  })

  test('an item without is creates the plain element', () => {
    const item = generateElement(createDomItem({ nodeName: 'button' }))
    expect(item.element.constructor).toBe(HTMLButtonElement)
    expect(item.element.hasAttribute('is')).toBe(false)
  })
})
