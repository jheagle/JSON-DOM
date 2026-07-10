import commonEvents from './commonEvents'

describe('commonEvents', () => {
  test('returns all common events', () => {
    const results = commonEvents()
    expect(Object.keys(results).length).toEqual(54)
  })
})
