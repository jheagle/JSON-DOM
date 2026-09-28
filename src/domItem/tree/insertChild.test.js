import insertChild from './insertChild'
import appendChild from './appendChild'
import createDomItem from '../objects/createDomItem'

describe('insertChild', () => {
  test('inserts at the given position and sets parentItem, like appendChild does at the end', () => {
    const parent = createDomItem({ nodeName: 'ul' })
    const second = createDomItem({ nodeName: 'li', nodeValue: null })
    appendChild(parent, second)
    const first = createDomItem({ nodeName: 'li', nodeValue: null })
    insertChild(parent, first, 0)
    expect(parent.children).toEqual([first, second])
    expect(first.parentItem).toBe(parent)
    expect(second.parentItem).toBe(parent)
  })

  test('inserting at children.length is the same as appendChild', () => {
    const parent = createDomItem({ nodeName: 'ul' })
    const child = createDomItem({ nodeName: 'li' })
    insertChild(parent, child, parent.children.length)
    expect(parent.children).toEqual([child])
    expect(child.parentItem).toBe(parent)
  })

  test('an out-of-range index clamps to the nearest end, matching Array.prototype.splice', () => {
    const parent = createDomItem({ nodeName: 'ul' })
    const onlyChild = createDomItem({ nodeName: 'li' })
    insertChild(parent, onlyChild, 99)
    expect(parent.children).toEqual([onlyChild])
    const newFirst = createDomItem({ nodeName: 'li' })
    insertChild(parent, newFirst, -99)
    expect(parent.children).toEqual([newFirst, onlyChild])
  })

  test('returns the parent', () => {
    const parent = createDomItem({ nodeName: 'ul' })
    const child = createDomItem({ nodeName: 'li' })
    expect(insertChild(parent, child, 0)).toBe(parent)
  })
})
