import addDomItemProperties from './addDomItemProperties'

describe('addDomItemProperties', () => {
  test('will add all missing properties to be a valid DomItem', () => {
    const invalidDomItem = {
      nodeName: 'div',
      children: [
        {
          nodeName: 'p'
        }
      ]
    }
    const fixedDomItem = addDomItemProperties(invalidDomItem)
    expect(fixedDomItem).toHaveProperty('attributes')
    expect(fixedDomItem).toHaveProperty('element')
    expect(fixedDomItem).toHaveProperty('eventListeners')
    expect(fixedDomItem).toHaveProperty('jsonExclusions')
    expect(fixedDomItem).toHaveProperty('nodeValue')
    expect(fixedDomItem).toHaveProperty('parentItem')
    expect(fixedDomItem).toHaveProperty('appendChild')
    expect(fixedDomItem).toHaveProperty('removeChild')
    expect(fixedDomItem.children[0]).toHaveProperty('attributes')
    expect(fixedDomItem.children[0]).toHaveProperty('element')
    expect(fixedDomItem.children[0]).toHaveProperty('eventListeners')
    expect(fixedDomItem.children[0]).toHaveProperty('jsonExclusions')
    expect(fixedDomItem.children[0]).toHaveProperty('nodeValue')
    expect(fixedDomItem.children[0]).toHaveProperty('parentItem')
    expect(fixedDomItem.children[0]).toHaveProperty('appendChild')
    expect(fixedDomItem.children[0]).toHaveProperty('removeChild')
  })
})
