import 'core-js/stable'
import functionalHelpers from 'functional-helpers'

/**
 * Check if a class exists on the element, return object with keys for each class and a -1, 0, 1 difference indicator.
 * @function
 * @memberOf module:domFunctions
 * @param {HTMLElement} element - Provide an element to check classes
 * on.
 * @param {string} classes - A string of classes (like the content of the 'class' attribute) to be compared
 * @returns {Object<string, number>|*}
 */
const elementCompareClassList = (element, classes) => functionalHelpers.compareArrays(
  classes.split(' '),
  [].from(element.classList)
)

export default elementCompareClassList
