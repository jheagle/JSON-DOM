import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import updateDomItem from './updateDomItem.js'

/**
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having child DomItems with config changes to be
 * applied
 * @returns {DomItem}
 */
const updateDomItems = config => {
  const domItem = updateDomItem(config)
  return functionalHelpers.setValue(
    'children',
    functionalHelpers.mapObject(domItem.children, child => updateDomItems(child)),
    domItem
  )
}

export default updateDomItems
