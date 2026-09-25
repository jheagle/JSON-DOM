import 'core-js/stable'
import siFunciona from 'si-funciona'
import type { CoreItem } from '../domItem/types'
import getNonSerializableKeys from '../domItem/traits/getNonSerializableKeys'

/**
 * Check if the value is an empty object / array, or if it is null or undefined.
 * @param {*} propertyValue
 * @returns {boolean}
 * @private
 */
const isEmpty = (propertyValue: unknown): boolean => siFunciona.emptyObject(propertyValue as object) || propertyValue === null || typeof propertyValue === 'undefined'

/**
 * Remove all empty properties to reduce total size of the object.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} item - The DomItem with properties to check for empty.
 * @param {Array} propertiesToDelete - Optional array of additional property names to remove.
 * @returns {DomItem}
 */
const removeEmptyProperties = (item: CoreItem, propertiesToDelete: string[] = []): CoreItem => {
  item.children.forEach(child => {
    removeEmptyProperties(child, propertiesToDelete)
  })
  const properties = item as Record<string, unknown>
  // What the item's traits only have where the item lives (an element, ...) is not json either
  const toDelete = propertiesToDelete.concat(getNonSerializableKeys(item))
  siFunciona.objectKeys(item).forEach((property: string) => {
    const propertyValue = properties[property]
    if (isEmpty(propertyValue) || toDelete.includes(property)) {
      delete properties[property]
    }
  })
  return item
}

export default removeEmptyProperties
