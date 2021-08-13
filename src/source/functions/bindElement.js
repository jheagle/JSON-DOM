import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import generateElement from './generateElement'

/**
 * Generate HTML element data for a provided DomItem
 * @function
 * @memberOf module:domFunctions
 * @param {module:domObjects~DomItem} item - The DomItem needing element to be generated
 * @return {module:domObjects~DomItem}
 */
const bindElement = item => functionalHelpers.setValue(
  'element',
  (!item.element || !item.element.style) ? generateElement(item).element : item.element,
  item
)

export default bindElement
