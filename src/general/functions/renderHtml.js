import 'core-js/stable'
import appendChild from './appendChild.js'
import documentItem from '../objects/documentItem.js'
import setParentItemReferences from './setParentItemReferences.js'
import updateElements from './updateElements.js'

/**
 * This is a shortcut for building the specified HTML elements and appending them to the Dom
 * with associated listeners.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem|null} item - The DomItem that we want to render the element for
 * @returns {DomItem}
 */
const renderHtml = (item = null) => {
  let itemToRender = item
  if (item === null) {
    itemToRender = documentItem
  }
  if (itemToRender.parentItem === null) {
    // excluding when documentItem was passed in, append the item to the documentItem body
    itemToRender = appendChild(documentItem.body, item)
  }
  // Render the elements and return either to original reference, or updated documentItem (whichever is available)
  const updatedItem = updateElements(setParentItemReferences(itemToRender))
  return item ?? updatedItem
}

export default renderHtml
