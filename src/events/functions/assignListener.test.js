/**
 * @jest-environment jsdom
 */
import assignListener from './assignListener'

describe('assignListener', () => {
  test('will apply an event listener to an element', () => {
    const clickButton = document.createElement('button')
    document.body.appendChild(clickButton)
    const testFn = jest.fn()
    assignListener('click', clickButton, () => testFn())
    clickButton.click()
    expect(testFn).toHaveBeenCalledTimes(1)
  })
})
