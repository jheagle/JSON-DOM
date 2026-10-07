/**
 * @jest-environment jsdom
 */
import createDomItem from '../domItem/objects/createDomItem'
import updateElement from './updateElement'

jest.mock('../diff/domItemChanges')

/**
 * domItemChanges is expected to hand updateElement an already kebab-case style key, but a style property already
 * assigned on the element (changed rather than newly added) has been observed, in real use, to come back through in
 * its original camelCase form. CSSOM silently ignores setProperty/removeProperty given an invalid (camelCase)
 * property name, so without a defensive kabobCase at the point of use the style is just dropped, with no error
 * anywhere. These tests drive updateElement directly with a mocked change list, since the exact real-world path
 * that produces a camelCase key here was not pinned down to a minimal, organic reproduction.
 */
describe('updateElement is defensive about a style key which is not kebab-case', () => {
  test('a multi-word style is applied even if it arrives as camelCase', () => {
    const domItemChanges = require('../diff/domItemChanges').default
    domItemChanges.mockReturnValue({ added: { 'style.boxShadow': '0 0 0 6px red' }, removed: {} })
    const item = createDomItem({ element: document.createElement('div') })
    updateElement(item)
    expect(item.element.style.boxShadow).toBe('0 0 0 6px red')
  })

  test('a multi-word style is removed even if it arrives as camelCase', () => {
    const domItemChanges = require('../diff/domItemChanges').default
    domItemChanges.mockReturnValue({ added: {}, removed: { 'style.boxShadow': '0 0 0 6px red' } })
    const element = document.createElement('div')
    element.style.setProperty('box-shadow', '0 0 0 6px red')
    const item = createDomItem({ element })
    updateElement(item)
    expect(item.element.style.boxShadow).toBe('')
  })
})
