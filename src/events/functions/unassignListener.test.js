/**
 * @jest-environment jsdom
 */
import assignListener from './assignListener'
import unassignListener from './unassignListener'

describe('unassignListener', () => {
  test('will apply an event listener to an element', () => {
    const clickButton = document.createElement('button')
    document.body.appendChild(clickButton)
    const testFn = jest.fn()
    const callFunc = () => testFn()
    assignListener('click', clickButton, callFunc)
    clickButton.click()
    expect(testFn).toHaveBeenCalledTimes(1)
    unassignListener('click', clickButton, callFunc)
    clickButton.click()
    // not called more than previous call
    expect(testFn).toHaveBeenCalledTimes(1)
  })
})
