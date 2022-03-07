/**
 * @jest-environment jsdom
 */
import getAssignedStyles from '../../src/source/functions/getAssignedStyles.js'

describe('getAssignedStyles', () => {
  test('will build object of all styles', () => {
    document.body.innerHTML = '<div style="display: block; background-color: red"></div>'
    const element = document.getElementsByTagName('div')[0]
    expect(getAssignedStyles(element.style)).toEqual({ display: 'block', 'background-color': 'red' })
  })
})
