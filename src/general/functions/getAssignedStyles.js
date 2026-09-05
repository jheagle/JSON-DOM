import 'core-js/stable'
import siFunciona from 'si-funciona'

/**
 * Get all the styles which have been assigned to this element. Assigned styles are indicated as numeric-key
 * properties with a value indicating the string-key property which has been assigned. The string-key properties
 * have the assigned values.
 * @function
 * @memberOf module:domGeneral
 * @param {Object.<style, style>|CSSProperties} elementStyles
 * @returns {object}
 */
const getAssignedStyles = elementStyles => siFunciona.reduceObject(
  elementStyles,
  (styles, attr, key) => isNaN(key)
    ? styles
    : siFunciona.setValue(attr, elementStyles[attr], styles),
  {}
)

export default getAssignedStyles
