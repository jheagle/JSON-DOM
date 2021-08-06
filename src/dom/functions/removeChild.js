import 'core-js/stable'
import documentItem from '../objects/documentItem'

/**
 * Reverse of appendHtml, remove a DomItem and have the associated element removed.
 * @function
 * @memberOf module:domFunctions
 * @param {module:domObjects~DomItem} item - The DomItem with HTMLElement to be removed
 * @param {module:domObjects~DomItem} parent - The parent of the items
 * @returns {Array.<module:domObjects~DomItem>}
 */
const removeChild = (item, parent = documentItem.body) => {
  parent.element.removeChild(item.element)
  return parent.children.splice(parent.children.indexOf(item), 1)
}

export default removeChild