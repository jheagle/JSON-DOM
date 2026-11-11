/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import documentItem from '../objects/documentItem'
import siFunciona from 'si-funciona'
import type { DomItem } from '../types'

/**
 * A selector function for retrieving existing child domGeneral.DomItems from the given parent item.
 * This function will check all the children starting from item, and scan the attributes
 * property for matches. The return array contains children matching from all levels.
 * WARNING: This is a recursive function.
 * @param attr - Provide the attribute name to be searched
 * @param value - The attribute value to be compared
 * @param item - The DomItem which may have parent items matching the
 * attribute criteria
 */
const getParentsFromAttribute = (attr: string, value: unknown, item: DomItem = documentItem.body): DomItem[] => {
  if (item.parentItem === null) {
    if (item.nodeName === '#document') {
      throw new Error('Root parent item must be an empty object, null reference found.')
    }
    throw new Error('Detached child, missing parentItem reference. Use empty object if this is the root item.')
  }
  if (siFunciona.emptyObject(item.parentItem)) {
    return []
  }
  const parent = item.parentItem as DomItem
  return (parent.attributes[attr] || (item as Record<string, unknown>)[attr] || false) === value
    ? getParentsFromAttribute(attr, value, parent).concat([parent])
    : getParentsFromAttribute(attr, value, parent)
}

export default getParentsFromAttribute
