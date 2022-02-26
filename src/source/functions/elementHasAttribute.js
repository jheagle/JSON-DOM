import 'core-js/stable'
import functionalHelpers from 'functional-helpers'

/**
 * Check if the provided Element has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @function
 * @memberOf module:domFunctions
 * @param {HTMLElement} element - Receive the element to be assessed
 * @param {string} key - The attribute name to search for
 * @param {string|Object} attr - The expected value of the attribute to compare against
 * @returns {boolean|Object.<string, number>}
 */
const elementHasAttribute = (element, key, attr) => {
  if (!element.style) {
    return false
  }
  if (key === 'style') {
    const elementStyles = functionalHelpers.reduceObject(
      element.style,
      (styles, attr, key) => {
        if (isNaN(key)) {
          return styles
        }
        styles[functionalHelpers.camelCase(attr)] = element.style[attr]
        return styles
      },
      {}
    )
    // For attributes which are objects or multi-part strings
    // -1 = remove attribute, 0 = no change, 1 = add attribute
    return functionalHelpers.compareArrays(
      Object.keys(attr),
      Object.keys(elementStyles)
    )
  }
  if (key === 'className') {
    // For attributes which are objects or multi-part strings
    // -1 = remove attribute, 0 = no change, 1 = add attribute
    return functionalHelpers.compareArrays(
      attr.split(' '),
      element.className.split(' ')
    )
  }
  return (element.hasAttribute(key) && element.getAttribute(key) === attr)
}

export default elementHasAttribute
