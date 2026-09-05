import 'core-js/stable'
import siFunciona from 'si-funciona'

/**
 * Check if the value is an empty object / array, or if it is null or undefined.
 * @param {*} propertyValue
 * @returns {boolean}
 */
const isEmpty = propertyValue => siFunciona.emptyObject(propertyValue) || propertyValue === null || typeof propertyValue === 'undefined'

/**
 * Remove all empty properties to reduce total size of the object.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} item - The DomItem with properties to check for empty.
 * @param {Array} propertiesToDelete - Optional array of additional property names to remove.
 * @returns {DomItem}
 */
const removeEmptyProperties = (item, propertiesToDelete = []) => {
  item.children.forEach(child => {
    removeEmptyProperties(child, propertiesToDelete)
  })
  siFunciona.objectKeys(item).forEach(property => {
    const propertyValue = item[property]
    if (isEmpty(propertyValue) || propertiesToDelete.includes(property)) {
      delete item[property]
    }
  })
  return item
}

export default removeEmptyProperties
