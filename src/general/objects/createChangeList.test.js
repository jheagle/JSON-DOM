/**
 * @jest-environment jsdom
 */
import createChangeList from './createChangeList'

describe('createChangeList', () => {
  test('will default all required properties', () => {
    const changeList = createChangeList()
    expect(changeList).toHaveProperty('removed')
    expect(changeList).toHaveProperty('added')
    expect(changeList).toHaveProperty('appendChanges')
  })
  test('will initialize with provided removed and added changes', () => {
    const changeList = createChangeList({
      removed: { foo: 'bar' },
      added: { baz: 'qux' }
    })
    expect(changeList.removed).toEqual({ foo: 'bar' })
    expect(changeList.added).toEqual({ baz: 'qux' })
  })
})
