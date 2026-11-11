/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import documentItem from '../objects/documentItem'
import siFunciona from 'si-funciona'
import type { DomItem } from '../types'

/**
 * Helper for getting all domGeneral.DomItems going up from item's parent, each one carrying the given class, among
 * possibly several space-separated classes on that item - the same membership check as the real DOM's
 * classList.contains, not an exact match of the whole className attribute string (which getParentsFromAttribute
 * does, and which would miss a parent that also carries other classes).
 * WARNING: This is a recursive function.
 * @param className - The one class being searched for
 * @param item - The DomItem which may have parent items carrying the class
 */
const getParentsByClass = (className: string, item: DomItem = documentItem.body): DomItem[] => {
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
  const carriesClass = ((parent.attributes.className as string | undefined) ?? '').split(' ').includes(className)
  return carriesClass ? getParentsByClass(className, parent).concat([parent]) : getParentsByClass(className, parent)
}

export default getParentsByClass
