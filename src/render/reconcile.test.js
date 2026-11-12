/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
import treeloom from '../main'
import getDocumentItem from '../domItem/objects/documentItem'
import registerListener from '../events/functions/registerListener'
import { unregisterItemIds } from '../domItem/tree/itemIdIndex'

const documentItem = getDocumentItem()

/**
 * A list of three cells under one board, as a server would send it: plain data with ids, inflated from JSON.
 * @param cells - [id, className, text] for each cell
 * @param boardListeners - named listeners on the board
 */
const boardJson = (cells, boardListeners = {}) => JSON.stringify({
  nodeName: 'div',
  tagName: 'div',
  id: 9000,
  attributes: { className: 'board' },
  eventListeners: boardListeners,
  children: cells.map(([id, className, text]) => ({
    nodeName: 'div',
    tagName: 'div',
    id,
    attributes: { className, 'aria-label': text },
    isHit: className.includes('hit'),
    children: [{ nodeName: '#text', nodeValue: text, attributes: {}, children: [] }]
  }))
})

const inflate = json => treeloom.jsonToDomItem(json)

/** Render a board from JSON into the page, as a first push would be. */
const renderBoard = json => {
  const item = inflate(json)
  item.parentItem = null
  return treeloom.renderHtml(item, documentItem.body)
}

/** Every DOM mutation fn causes. */
const mutationsDuring = async fn => {
  const records = []
  const observer = new MutationObserver(list => records.push(...list))
  observer.observe(document.body, { subtree: true, attributes: true, childList: true, characterData: true })
  fn()
  await new Promise(resolve => setTimeout(resolve, 0))
  records.push(...observer.takeRecords())
  observer.disconnect()
  return records.map(record => {
    if (record.type === 'attributes') {
      return `attributes ${record.attributeName} on ${record.target.textContent}`
    }
    if (record.type === 'childList') {
      return `childList +${record.addedNodes.length} -${record.removedNodes.length} in ${record.target.nodeName}`
    }
    return `${record.type} ${record.target.nodeValue}`
  })
}

const cellElements = board => Array.from(board.element.children)
const texts = board => cellElements(board).map(element => element.textContent)

// Every test renders into the shared document root: take each board out of the page and out of the id index, or the
// next test's boards (same ids) would collide with it
afterEach(() => {
  documentItem.body.children.slice().forEach(child => {
    unregisterItemIds(child)
    child.element?.remove()
  })
  documentItem.body.children = []
})

describe('reconcile', () => {
  test('a changed attribute keeps every element and writes only that change', async () => {
    const board = renderBoard(boardJson([[1, 'cell', 'A1'], [2, 'cell', 'A2'], [3, 'cell', 'A3']]))
    const elementsBefore = cellElements(board)
    const records = await mutationsDuring(() => treeloom.reconcile(board, inflate(boardJson([[1, 'cell', 'A1'], [2, 'cell hit', 'A2'], [3, 'cell', 'A3']]))))
    expect(cellElements(board)).toEqual(elementsBefore)
    expect(records).toEqual(['attributes class on A2'])
    expect(elementsBefore[1].className).toBe('cell hit')
    // the item's data comes along too
    expect(board.children[1].isHit).toBe(true)
  })

  test('changed text is written into the same text node', () => {
    const board = renderBoard(boardJson([[1, 'cell', 'A1'], [2, 'cell', 'A2']]))
    const textNode = board.children[1].children[0].element
    treeloom.reconcile(board, inflate(boardJson([[1, 'cell', 'A1'], [2, 'cell', 'A2!']])))
    expect(board.children[1].children[0].element).toBe(textNode)
    expect(textNode.nodeValue).toBe('A2!')
  })

  test('nothing changed: nothing is written', async () => {
    const json = boardJson([[1, 'cell', 'A1'], [2, 'cell', 'A2']])
    const board = renderBoard(json)
    expect(await mutationsDuring(() => treeloom.reconcile(board, inflate(json)))).toEqual([])
  })

  test('children added, removed and moved: kept ones keep their elements, the page order follows the next tree', () => {
    const board = renderBoard(boardJson([[1, 'cell', 'A1'], [2, 'cell', 'A2'], [3, 'cell', 'A3']]))
    const [one, , three] = cellElements(board)
    treeloom.reconcile(board, inflate(boardJson([[3, 'cell', 'A3'], [4, 'cell', 'B1'], [1, 'cell', 'A1']])))
    expect(texts(board)).toEqual(['A3', 'B1', 'A1'])
    expect(cellElements(board)[0]).toBe(three)
    expect(cellElements(board)[2]).toBe(one)
    expect(board.children.map(child => child.id)).toEqual([3, 4, 1])
    board.children.forEach(child => expect(child.parentItem).toBe(board))
  })

  test('the id index follows: removed items are gone, added ones can be found', () => {
    const board = renderBoard(boardJson([[11, 'cell', 'A1'], [12, 'cell', 'A2']]))
    expect(treeloom.getItemById(documentItem, 12)).toBe(board.children[1])
    treeloom.reconcile(board, inflate(boardJson([[11, 'cell', 'A1'], [13, 'cell', 'A3']])))
    expect(() => treeloom.getItemById(documentItem, 12)).toThrow()
    expect(treeloom.getItemById(documentItem, 13)).toBe(board.children[1])
    expect(treeloom.getItemById(documentItem, 11)).toBe(board.children[0])
  })

  test('a child with another node name at the same position is replaced, not reused', () => {
    const board = renderBoard(boardJson([[1, 'cell', 'A1']]))
    const next = inflate(boardJson([[1, 'cell', 'A1']]))
    next.children[0].nodeName = 'span'
    next.children[0].tagName = 'span'
    next.children[0].id = 50
    treeloom.reconcile(board, next)
    expect(cellElements(board).map(element => element.nodeName)).toEqual(['SPAN'])
  })

  test('an unchanged named listener stays bound once; a changed one is swapped; a local function listener is kept', () => {
    const calls = []
    registerListener(() => calls.push('first'), 'firstAction', documentItem)
    registerListener(() => calls.push('second'), 'secondAction', documentItem)
    const listenersFor = name => ({ click: [{ listenerFunc: name, listenerArgs: {}, listenerOptions: false }] })
    const board = renderBoard(boardJson([[1, 'cell', 'A1']], listenersFor('firstAction')))
    treeloom.addEventListener('click', () => calls.push('local'), {}, false, board)
    treeloom.bindListeners(board)

    treeloom.reconcile(board, inflate(boardJson([[1, 'cell', 'A1']], listenersFor('firstAction'))))
    board.element.click()
    expect(calls).toEqual(['first', 'local'])

    calls.length = 0
    treeloom.reconcile(board, inflate(boardJson([[1, 'cell', 'A1']], listenersFor('secondAction'))))
    board.element.click()
    expect(calls.sort()).toEqual(['local', 'second'])
  })

  test('focus stays on the element that had it', () => {
    const board = renderBoard(boardJson([[1, 'cell', 'A1'], [2, 'cell', 'A2']]))
    const focused = cellElements(board)[1]
    focused.tabIndex = 0
    focused.focus()
    treeloom.reconcile(board, inflate(boardJson([[1, 'cell hit', 'A1'], [2, 'cell', 'A2']])))
    expect(document.activeElement).toBe(focused)
  })

  test('the next tree\'s new items are taken over and rendered under existing', () => {
    const board = renderBoard(boardJson([[1, 'cell', 'A1']]))
    const next = inflate(boardJson([[1, 'cell', 'A1'], [2, 'cell', 'A2']]))
    const added = next.children[1]
    treeloom.reconcile(board, next)
    expect(board.children[1]).toBe(added)
    expect(added.parentItem).toBe(board)
    expect(added.element.parentNode).toBe(board.element)
  })

  test('the item it updates is never replaced: another kind of node is an error, and the page is left as it was', () => {
    const board = renderBoard(boardJson([[1, 'cell', 'A1']]))
    const element = board.element
    const next = inflate(boardJson([[1, 'cell hit', 'A1']]))
    next.nodeName = 'section'
    expect(() => treeloom.reconcile(board, next)).toThrow('reconcile can\'t turn a div into a section')
    expect(board.element).toBe(element)
    expect(element.isConnected).toBe(true)
    expect(cellElements(board)[0].className).toBe('cell')
  })
})
