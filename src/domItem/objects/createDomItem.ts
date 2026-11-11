/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createCoreItem from './createCoreItem'
import withTrait from '../traits/withTrait'
import type { DomItem, DomItemConfig } from '../types'

/**
 * A plain child is an object which is not an item yet (an item always has a has map).
 * @private
 */
const isPlainChild = (child: DomItemConfig): boolean => typeof child === 'object' && child !== null && !child.has

/**
 * This is the basic Object for representing a node in treeloom's Virtual DOM (DomItem tree): a generic item (see
 * {@link createCoreItem}) with the render trait. All incoming attributes will be merged to the specified format, and the
 * given object is completed and returned (it is not copied). Children which are plain objects are completed the same way,
 * all the way down; a child which already has a has map is already an item, and is left alone.
 * @param item - DomItem-like object to be formatted as DomItem
 */
const createDomItem = (item: DomItemConfig = {}): DomItem => {
  if (Array.isArray(item.children)) {
    item.children.forEach((child: DomItemConfig) => {
      if (isPlainChild(child)) {
        createDomItem(child)
      }
    })
  }
  return withTrait(
    createCoreItem(item),
    'render',
    { element: item.element ?? null }
  ) as DomItem
}

export default createDomItem
