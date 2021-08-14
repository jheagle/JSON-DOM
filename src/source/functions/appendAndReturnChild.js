import 'core-js/stable'
import documentItem from '../objects/documentItem'
import retrieveParentItem from './retrieveParentItem'

/**
 * Provide a DomItem to be appended to a parent item, return the DomItem.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} child - A DomItem to be appended
 * @param {DomItem} parent - A parent item to have a new child appended
 * @returns {DomItem}
 */
const appendAndReturnChild = (child, parent = documentItem.body) => {
  retrieveParentItem(parent).element.appendChild(child.element)
  return child
}

export default appendAndReturnChild
