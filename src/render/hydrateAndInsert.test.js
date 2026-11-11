/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// Reproduces the real website scenario (index.html): a page with hand-authored HTML, never touched by json-dom,
// into which a json-dom-built header needs to be inserted as the FIRST child - proving the fix (insertChild +
// renderHtml's index) replaces that flow's four manual calls with two, keeps parentItem set, and never touches the
// hand-authored content that updateDomItems captured.
import createDomItem from '../domItem/objects/createDomItem'
import documentItem from '../domItem/objects/documentItem'
import renderHtml from './renderHtml'
import updateDomItems from '../sync/updateDomItems'

describe('inserting json-dom content into an already-rendered, hand-authored page', () => {
  test('the existing HTML is captured and preserved, and the new item lands at the given position', () => {
    document.body.innerHTML = '<div id="main"><h1>Hello</h1></div><section id="intro"></section>'

    updateDomItems(documentItem)
    const header = createDomItem({ nodeName: 'header', attributes: { className: 'menu' } })
    renderHtml(header, documentItem.body, 0)

    // the hand-authored content survived, untouched
    expect(document.body.children[1].id).toBe('main')
    expect(document.body.children[1].innerHTML).toBe('<h1>Hello</h1>')
    expect(document.body.children[2].id).toBe('intro')
    // the new item landed first, both in the tree and in the real DOM
    expect(documentItem.body.children[0]).toBe(header)
    expect(document.body.children[0]).toBe(header.element)
    expect(header.parentItem).toBe(documentItem.body)
  })
})
