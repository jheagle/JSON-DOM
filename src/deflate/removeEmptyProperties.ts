/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import siFunciona from 'si-funciona'
import type { CoreItem } from '../domItem/types'
import getNonSerializableKeys from '../domItem/traits/getNonSerializableKeys'

/**
 * Check if the value is an empty object / array, or if it is null or undefined.
 * @param propertyValue
 * @private
 */
const isEmpty = (propertyValue: unknown): boolean => siFunciona.emptyObject(propertyValue as object) || propertyValue === null || typeof propertyValue === 'undefined'

/**
 * Remove all empty properties to reduce total size of the object.
 * @param item - The DomItem with properties to check for empty.
 * @param propertiesToDelete - Optional array of additional property names to remove.
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
