const functionalHelpers = require('../../src/core/core.js')

test('curry returns callable with unmet parameters', () => {
  const arg1 = 'first'
  const arg2 = 'second'
  const arg3 = 'third'
  const testFunction = (arg1, arg2, arg3) => `arg1: ${arg1}, arg2: ${arg2}, arg3: ${arg3}`
  expect(functionalHelpers.curry(testFunction)(arg1, arg2, arg3))
    .toBe(`arg1: ${arg1}, arg2: ${arg2}, arg3: ${arg3}`)
  const functionNoArgs = functionalHelpers.curry(testFunction)
  expect(typeof functionNoArgs).toBe('function')
  const functionOneArg = functionNoArgs(arg1)
  expect(typeof functionOneArg).toBe('function')
  const functionTwoArgs = functionOneArg(arg2)
  expect(typeof functionTwoArgs).toBe('function')
  expect(functionTwoArgs(arg3)).toBe(`arg1: ${arg1}, arg2: ${arg2}, arg3: ${arg3}`)
})
// pipe
// setValue
// setAndReturnValue
// mapObject
// mapProperty
// filterObject
// reduceObject
// notEmptyObjectOrArray
// cloneObject
// mergeObjects
// mergeObjectsMutable
// buildArray
// buildArrayOfReferences
// inArray
test('inArray returns true', () => {
  expect(functionalHelpers.inArray([1, 2, 3, 4, 5], 4)).toBe(true)
})
// getAbsoluteMax
// getAbsoluteMin
// randomNumber
// randomInteger
// compare
// compareArrays
// trace
// queueTimeout
