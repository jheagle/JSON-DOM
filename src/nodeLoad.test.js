/**
 * @jest-environment node
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// Loading treeloom where there is no document (Node, a server) must work: the document's root is only built on use
describe('loading treeloom without a document', () => {
  test('there really is no document here', () => {
    expect(typeof document).toBe('undefined')
  })

  test('the full API loads, and building items works', () => {
    const treeloom = require('./main')
    expect(typeof treeloom.createDomItem).toBe('function')
    expect(treeloom.createDomItem({ tagName: 'p' }).tagName).toBe('p')
  })

  test('the render-only API loads too', () => {
    expect(typeof require('./renderOnly').renderHtml).toBe('function')
  })

  test('documentItem is only built when it is read, so reading it is what fails here', () => {
    const treeloom = require('./main')
    expect(Object.keys(treeloom)).toContain('documentItem')
    expect(() => treeloom.documentItem).toThrow(/document is not defined/)
  })
})
