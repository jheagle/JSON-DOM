import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import updateElement from './updateElement.js'

/**
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having child DomItems with config changes to be
 * applied
 * @returns {DomItem}
 */
const updateElements = config => {
  const domItem = updateElement(config)
  return functionalHelpers.setValue(
    'children',
    functionalHelpers.mapObject(config.children, child => updateElements(child)),
    domItem
  )
}

export default updateElements
