import 'core-js/stable'
import updateElements from './updateElements.js'
import documentItem from '../objects/documentItem.js'

/**
 * This is a shortcut for building the specified HTML elements and appending them to the Dom
 * with associated listeners.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem|null} item - The DomItem that we want to render the element for
 * @returns {DomItem}
 */
const renderHtml = (item = null) => {
  if (item === null) {
    item = documentItem
  }
  return updateElements(item)
}

export default renderHtml
