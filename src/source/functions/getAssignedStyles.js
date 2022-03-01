import 'core-js/stable'
import functionalHelpers from 'functional-helpers'

/**
 * Get all the styles which have been assigned to this element. Assigned styles are indicated as numeric-key
 * properties with a value indicating the string-key property which has been assigned. The string-key properties
 * have the assigned values.
 * @function
 * @memberOf module:jsonDom~functions
 * @param {object.<style, style>|CSSProperties>} elementStyles
 * @returns {object}
 */
const getAssignedStyles = elementStyles => functionalHelpers.reduceObject(
  elementStyles,
  (styles, attr, key) => isNaN(key)
    ? styles
    : functionalHelpers.setValue(attr, elementStyles[attr], styles),
  {}
)

export default getAssignedStyles
