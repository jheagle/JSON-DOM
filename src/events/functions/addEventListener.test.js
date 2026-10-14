import addEventListener from './addEventListener'
import createDomItem from '../../domItem/objects/createDomItem'

describe('addEventListener', () => {
  test('will add event listener to domItem', () => {
    const item = createDomItem()
    const testFunction = () => {}
    const eventName = 'click'
    const updatedItem = addEventListener(eventName, testFunction, null, false, item)
    expect(updatedItem.eventListeners).toHaveProperty(eventName)
    expect(updatedItem.eventListeners[eventName][0].listenerFunc).toBe(testFunction)
  })

  test('warns when attaching a raw function instead of a registered name', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {})
    const item = createDomItem()
    addEventListener('click', () => {}, null, false, item)
    expect(warnSpy).toHaveBeenCalledTimes(1)
    expect(warnSpy.mock.calls[0][0]).toContain('addEventListener')
    warnSpy.mockRestore()
  })

  test('does not warn when attaching a registered name', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {})
    const item = createDomItem()
    addEventListener('click', 'clickFn', null, false, item)
    expect(warnSpy).not.toHaveBeenCalled()
    warnSpy.mockRestore()
  })
})
