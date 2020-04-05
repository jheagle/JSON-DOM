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

test('pipe some data through functions results in new data', () => {
  const someString = ''
  const functionOne = string => string ? `${string}, arg1: first` : 'arg1: first'
  const functionTwo = string => string ? `${string}, arg2: second` : 'arg2: second'
  const functionThree = string => string ? `${string}, arg3: third` : 'arg3: third'
  expect(functionalHelpers.pipe(functionOne)(someString))
    .toBe('arg1: first')
  expect(functionalHelpers.pipe(functionOne, functionTwo)(someString))
    .toBe('arg1: first, arg2: second')
  expect(functionalHelpers.pipe(functionOne, functionTwo, functionThree)(someString))
    .toBe('arg1: first, arg2: second, arg3: third')
})

test('callWithParams will use the correct number of parameters for a function', () => {
  const testFunction = (...args) => {
    const arg1 = (typeof args[0] !== 'undefined') ? args[0] : '[not set]'
    const arg2 = (typeof args[1] !== 'undefined') ? args[1] : '[not set]'
    const arg3 = (typeof args[2] !== 'undefined') ? args[2] : '[not set]'
    return `arg1: ${arg1}, arg2: ${arg2}, arg3: ${arg3}`
  }
  const params = ['first', 'second', 'third', 'fourth', 'five']
  expect(functionalHelpers.callWithParams(testFunction, params, 0))
    .toBe('arg1: [not set], arg2: [not set], arg3: [not set]')
  expect(functionalHelpers.callWithParams(testFunction, params, 1))
    .toBe('arg1: first, arg2: [not set], arg3: [not set]')
  expect(functionalHelpers.callWithParams(testFunction, params, 2))
    .toBe('arg1: first, arg2: second, arg3: [not set]')
  expect(functionalHelpers.callWithParams(testFunction, params, 3))
    .toBe('arg1: first, arg2: second, arg3: third')
})

test('setValue will update an item and return the item', () => {
  const someObject = {
    firstProp: null,
    secondProp: 'something here'
  }
  const updateObject1 = functionalHelpers.setValue('firstProp', { newValue: 'some value' }, someObject)
  const updateObject2 = functionalHelpers.setValue('secondProp', 'a new thing here', updateObject1)
  expect(updateObject2).toEqual({ firstProp: { newValue: 'some value' }, secondProp: 'a new thing here' })
})

test('setAndReturnValue will update an item and return the value', () => {
  const someObject = {
    firstProp: null,
    secondProp: 'something here'
  }
  const firstValue = functionalHelpers.setAndReturnValue(someObject, 'firstProp', { newValue: 'some value' })
  expect(firstValue).toEqual({ newValue: 'some value' })
  const secondValue = functionalHelpers.setAndReturnValue(someObject, 'secondProp', 'a new thing here')
  expect(secondValue).toEqual('a new thing here')
})

test('mapObject applies function to update each value of the object', () => {
  const testObject = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
  const testFunction = value => value + 3
  expect(functionalHelpers.mapObject(testObject, testFunction))
    .toEqual({ first: 4, second: 5, third: 6, fourth: 7, fifth: 8 })
})

test('mapProperty returns the original object with mapped property', () => {
  const testObject = { nestedObject: { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 } }
  const testFunction = value => value + 3
  expect(functionalHelpers.mapProperty('nestedObject', testFunction, testObject))
    .toEqual({ nestedObject: { first: 4, second: 5, third: 6, fourth: 7, fifth: 8 } })
})

test('filterObject applies function to exclude some values', () => {
  const testObject = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
  const testFunction = value => (value % 2) === 0
  expect(functionalHelpers.filterObject(testObject, testFunction))
    .toEqual({ second: 2, fourth: 4 })
})

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
