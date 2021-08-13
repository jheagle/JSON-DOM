/**
 * @jest-environment jsdom
 */
import registerListener from '../../src/source/functions/registerListener'

const coolFunc = () => 'hello'
test('can register a listener', () => {
  expect(registerListener(coolFunc).coolFunc).toBe(coolFunc)
})
