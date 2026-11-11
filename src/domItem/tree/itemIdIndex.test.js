/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createDomItem from '../objects/createDomItem'
import { getItemById, registerItemIds, unregisterItemIds } from './itemIdIndex'

describe('itemIdIndex', () => {
  test('getItemById resolves an item registered against its own root', () => {
    const root = createDomItem({ nodeName: '#document', parentItem: {} })
    const child = createDomItem({ nodeName: 'div' })
    child.parentItem = root
    root.children = [child]
    registerItemIds(root)

    expect(getItemById(root, child.id)).toBe(child)
  })

  test('registerItemIds registers a whole subtree recursively, root item included', () => {
    const root = createDomItem({ nodeName: '#document', parentItem: {} })
    const child = createDomItem({ nodeName: 'div' })
    const grandchild = createDomItem({ nodeName: 'span' })
    child.children = [grandchild]
    grandchild.parentItem = child
    child.parentItem = root
    root.children = [child]

    registerItemIds(root)

    expect(getItemById(root, root.id)).toBe(root)
    expect(getItemById(root, child.id)).toBe(child)
    expect(getItemById(root, grandchild.id)).toBe(grandchild)
  })

  test('throws when an id was never registered against this root', () => {
    const root = createDomItem({ nodeName: '#document', parentItem: {} })
    expect(() => getItemById(root, 999999)).toThrow(/no item with id 999999/i)
  })

  test('does nothing for an item that is not under a real root (no parentItem chain reaching one)', () => {
    const detached = createDomItem({ nodeName: 'div' })
    expect(() => registerItemIds(detached)).not.toThrow()
    expect(() => unregisterItemIds(detached)).not.toThrow()
  })

  test('two different roots keep their own ids independent, even reusing the same small integers', () => {
    const rootOne = createDomItem({ nodeName: '#document', parentItem: {} })
    const rootTwo = createDomItem({ nodeName: '#document', parentItem: {} })
    const itemOne = createDomItem({ nodeName: 'div' })
    const itemTwo = createDomItem({ nodeName: 'div' })
    itemOne.id = 1
    itemTwo.id = 1
    itemOne.parentItem = rootOne
    itemTwo.parentItem = rootTwo
    rootOne.children = [itemOne]
    rootTwo.children = [itemTwo]

    registerItemIds(rootOne)
    registerItemIds(rootTwo)

    expect(getItemById(rootOne, 1)).toBe(itemOne)
    expect(getItemById(rootTwo, 1)).toBe(itemTwo)
  })

  test('unregisterItemIds removes a subtree recursively, so its ids no longer resolve against that root', () => {
    const root = createDomItem({ nodeName: '#document', parentItem: {} })
    const child = createDomItem({ nodeName: 'div' })
    const grandchild = createDomItem({ nodeName: 'span' })
    child.children = [grandchild]
    grandchild.parentItem = child
    child.parentItem = root
    root.children = [child]
    registerItemIds(root)

    unregisterItemIds(child)

    expect(() => getItemById(root, child.id)).toThrow(/no item with id/i)
    expect(() => getItemById(root, grandchild.id)).toThrow(/no item with id/i)
    expect(getItemById(root, root.id)).toBe(root)
  })

  test('repairs a duplicate id on registration, giving the second item a fresh one instead of silently ' +
    'losing the first - the shape a generic "build one item, then clone it N times" helper (si-funciona\'s ' +
    'buildArray) produces, copying whichever id the one template already carries into every copy', () => {
    const root = createDomItem({ nodeName: '#document', parentItem: {} })
    const original = createDomItem({ nodeName: 'div' })
    const duplicate = createDomItem({ nodeName: 'span' })
    duplicate.id = original.id
    original.parentItem = root
    duplicate.parentItem = root
    root.children = [original, duplicate]

    registerItemIds(root)

    expect(duplicate.id).not.toBe(original.id)
    expect(getItemById(root, original.id)).toBe(original)
    expect(getItemById(root, duplicate.id)).toBe(duplicate)
  })

  test('a raw plain object with no id at all (never passed through createCoreItem - see ' +
    'updatePlayerStats.ts\'s own merge-by-reference fallback) gets one assigned on registration', () => {
    const root = createDomItem({ nodeName: '#document', parentItem: {} })
    const raw = { nodeName: 'li', attributes: {} }
    raw.parentItem = root
    root.children = [raw]

    expect(() => registerItemIds(root)).not.toThrow()

    expect(typeof raw.id).toBe('number')
    expect(getItemById(root, raw.id)).toBe(raw)
  })

  test('a raw plain child with no children array and no parentItem at all does not crash registration ' +
    'or unregistration - undefined is treated the same as detached, not walked into', () => {
    const root = createDomItem({ nodeName: '#document', parentItem: {} })
    const container = createDomItem({ nodeName: 'ul' })
    const raw = { nodeName: 'li', attributes: {} } // no .children, no .parentItem
    container.parentItem = root
    container.children = [raw]
    root.children = [container]

    expect(() => registerItemIds(root)).not.toThrow()
    expect(() => unregisterItemIds(container)).not.toThrow()
  })

  test('registering the same item again under the same id is a no-op, not a collision', () => {
    const root = createDomItem({ nodeName: '#document', parentItem: {} })
    const child = createDomItem({ nodeName: 'div' })
    child.parentItem = root
    root.children = [child]
    registerItemIds(root)
    const idBefore = child.id

    registerItemIds(root)

    expect(child.id).toBe(idBefore)
    expect(getItemById(root, idBefore)).toBe(child)
  })

  test('resolves the right item even when the two trees differ in shape - the bug class position-based ' +
    'getItemByPath could not survive', () => {
    // The server's real tree: body has two children, the item of interest is the second one.
    const serverRoot = createDomItem({ nodeName: '#document', parentItem: {} })
    const serverFirst = createDomItem({ nodeName: 'div' })
    const serverTarget = createDomItem({ nodeName: 'button' })
    serverFirst.parentItem = serverRoot
    serverTarget.parentItem = serverRoot
    serverRoot.children = [serverFirst, serverTarget]
    registerItemIds(serverRoot)

    // A client's own redacted tree: the same target item (same id, carried over a clone/JSON round-trip), but
    // the first sibling was omitted - the client's own body has only one child, the target is now at index 0,
    // not index 1. A path captured on the client (e.g. [1], matching the server's own shape) would resolve to
    // nothing (or the wrong item) on the server; an id captured the same way still finds it.
    const clientTarget = createDomItem({ nodeName: 'button' })
    clientTarget.id = serverTarget.id
    const clientRoot = createDomItem({ nodeName: '#document', parentItem: {} })
    clientTarget.parentItem = clientRoot
    clientRoot.children = [clientTarget]
    registerItemIds(clientRoot)

    expect(getItemById(serverRoot, clientTarget.id)).toBe(serverTarget)
  })
})
