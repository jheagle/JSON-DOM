import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import updateElement from './updateElement'

/**
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {module:domObjects~DomItem} config - The DomItem having child DomItems with config changes to be
 * applied
 * @returns {module:domObjects~DomItem}
 */
const updateElements = config => {
  const domItem = updateElement(config)
  return functionalHelpers.setValue(
    'children',
    functionalHelpers.mapObject(domItem.children, child => updateElements(child)),
    domItem
  )
}

export default updateElements
