/**
 * @jest-environment jsdom
 */
import 'core-js/stable'
import setParentItemReferences from './setParentItemReferences.js'

describe('setParentItemReferences', () => {
  test('will return item if it has no children', () => {
    const objectWithNoChildren = {
      name: 'top parent',
      parentItem: null
    }
    const assignedParentItems = setParentItemReferences(objectWithNoChildren)
    expect(assignedParentItems).toBe(objectWithNoChildren)
  })
  test('will set parentItem circular references correctly', () => {
    const objectWithReferences = {
      name: 'top parent',
      children: [
        {
          name: 'first child',
          children: [
            {
              name: 'first grandchild of first child',
              children: [],
              parentItem: null
            },
            {
              name: 'second grandchild of first child',
              children: [],
              parentItem: null
            }
          ],
          parentItem: null
        },
        {
          name: 'second child',
          children: [
            {
              name: 'first grandchild of second child',
              children: [],
              parentItem: null
            },
            {
              name: 'second grandchild of second child',
              children: [],
              parentItem: null
            }
          ],
          parentItem: null
        }
      ],
      parentItem: null
    }
    const assignedParentItems = setParentItemReferences(objectWithReferences)
    expect(assignedParentItems.children[0].parentItem).toBe(assignedParentItems)
    expect(assignedParentItems.children[1].parentItem).toBe(assignedParentItems)
    expect(assignedParentItems.children[0].parentItem).toBe(assignedParentItems)
    expect(assignedParentItems.children[0].children[0].parentItem).toBe(assignedParentItems.children[0])
    expect(assignedParentItems.children[0].children[1].parentItem).toBe(assignedParentItems.children[0])
    expect(assignedParentItems.children[1].children[0].parentItem).toBe(assignedParentItems.children[1])
    expect(assignedParentItems.children[1].children[1].parentItem).toBe(assignedParentItems.children[1])
  })
})
