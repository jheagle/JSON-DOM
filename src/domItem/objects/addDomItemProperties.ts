/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createDomItem from './createDomItem'
import type { DomItem, DomItemConfig } from '../types'

/**
 * Ensure all basic properties of the DomItem are present.
 * @param item - The object that will be formatted as a DomItem.
 */
const addDomItemProperties = (item: DomItemConfig): DomItem => {
  if (typeof item.children !== 'undefined') {
    item.children.forEach((child: DomItemConfig) => {
      addDomItemProperties(child)
    })
  }
  return createDomItem(item)
}

export default addDomItemProperties
