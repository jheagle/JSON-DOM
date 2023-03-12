import 'core-js/stable'
import createDomItem from '../objects/createDomItem'

/**
 * Ensure all basic properties of the DomItem are present.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The object that will be formatted as a DomItem.
 * @returns {DomItem}
 */
const addDomItemProperties = item => {
  if (typeof item.children !== 'undefined') {
    item.children.forEach(child => {
      addDomItemProperties(child)
    })
  }
  return createDomItem(item)
}

export default addDomItemProperties
