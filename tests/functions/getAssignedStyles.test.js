/**
 * @jest-environment jsdom
 */
import getAssignedStyles from '../../src/source/functions/getAssignedStyles.js'
import { logObject } from '../testHelpers'

describe('getAssignedStyles', () => {
  test('will build object of all styles', () => {
    document.body.innerHTML = '<div style="display: block; background-color: red"></div>'
    const element = document.getElementsByTagName('div')[0]
    const result = getAssignedStyles(element.style)
    logObject(result)
    const expected = { display: 'block', 'background-color': 'red' }
    expect(result).toEqual(expected)
  })
})
