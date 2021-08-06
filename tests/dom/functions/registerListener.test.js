const registerListener = require('../../../src/dom/functions/registerListener')

const coolFunc = () => 'hello'
test('can register a listener', () => {
  expect(registerListener(coolFunc).coolFunc).toBe(coolFunc)
})
