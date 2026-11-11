/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import getDocumentItem from './documentItem'

// The shared root, built on first use
const documentItem = getDocumentItem()

describe('documentItem', () => {
  test('has valid head', () => {
    expect(documentItem.children[0].nodeName).toBe('head')
  })

  test('has valid body', () => {
    expect(documentItem.children[1].nodeName).toBe('body')
  })
})

describe('getDocumentItem and the public documentItem', () => {
  test('every call returns the same root', () => {
    expect(getDocumentItem()).toBe(documentItem)
  })

  test('the public property reads the same root, and is a getter rather than a copied value', () => {
    const treeloom = require('../../main')
    expect(treeloom.documentItem).toBe(documentItem)
    expect(Object.getOwnPropertyDescriptor(treeloom, 'documentItem').get).toBeInstanceOf(Function)
    expect(require('../../renderOnly').documentItem).toBe(documentItem)
  })
})
