/**
 * @jest-environment jsdom
 */
import registerListener from './registerListener'

const coolFunc = () => 'hello'
describe('registerListener', () => {
  test('can register a listener', () => {
    expect(registerListener(coolFunc).coolFunc).toBe(coolFunc)
  })
})
