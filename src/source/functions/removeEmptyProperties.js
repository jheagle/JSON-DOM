import 'core-js/stable'
import siFunciona from 'si-funciona'

/**
 * Remove all empty properties to reduce total size of the object.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem with properties to check for empty.
 * @param {Array} propertiesToDelete - Optional array of additional property names to remove.
 * @returns {DomItem}
 */
const removeEmptyProperties = (item, propertiesToDelete) => {
  item.children.forEach(child => {
    removeEmptyProperties(child, propertiesToDelete)
  })
  siFunciona.objectKeys(item).forEach(property => {
    if (!item[property] || propertiesToDelete.includes(property)) {
      delete item[property]
    }
  })
  return item
}

export default removeEmptyProperties
