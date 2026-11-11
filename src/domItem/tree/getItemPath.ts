/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import siFunciona from 'si-funciona'
import type { DomItem, ItemPath } from '../types'

/**
 * The path from the root to an item: the index of the item among its parent's children, at each level from the top
 * down. An empty array means the item is the root itself.
 * WARNING: This is a recursive function.
 * @param item - The DomItem to find the path of.
 */
const getItemPath = (item: DomItem): ItemPath => {
  if (item.parentItem === null) {
    throw new Error('Detached child, missing parentItem reference. Use empty object if this is the root item.')
  }
  if (siFunciona.emptyObject(item.parentItem)) {
    return []
  }
  const parent = item.parentItem as DomItem
  return [...getItemPath(parent), parent.children.indexOf(item)]
}

export default getItemPath
