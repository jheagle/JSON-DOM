const PseudoEventTarget = require('../../../src/js/pseudoDom/class/PseudoEventTarget')

const testEventTarget = new PseudoEventTarget()

test('event target has listeners', () => {
  expect(testEventTarget.listeners).toStrictEqual([])
})
