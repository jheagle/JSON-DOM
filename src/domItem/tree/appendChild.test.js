import appendChild from './appendChild.js'
import createDomItem from '../objects/createDomItem.js'

describe('appendChild', () => {
  test('will attach a DomItem as a child with proper references', () => {
    const intendedParent = createDomItem({ nodeName: 'p' })
    expect(intendedParent.children.length).toBe(0)
    const intendedChild = createDomItem({ nodeName: '#text', nodeValue: 'some text for the paragraph' })
    appendChild(intendedParent, intendedChild)
    expect(intendedParent.children[0]).toBe(intendedChild)
    expect(intendedChild.parentItem).toBe(intendedParent)
  })
})
