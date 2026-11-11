/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import documentItem from '../objects/documentItem'
import gatherChildItems from './gatherChildItems'
import getChildTest from './getChildTest'
import type { DomItem } from '../types'

/**
 * A selector function for retrieving existing child domGeneral.DomItems from the given parent item.
 * This function will check all the children starting from item, and scan the attributes
 * property for matches. The returned array contains children matching from all levels.
 * WARNING: This calls a recursive function.
 * @param attr - Provide the attribute name to be searched
 * @param value - The attribute value to be compared
 * @param item - The DomItem which may have child items matching the attribute
 * criteria
 */
const getChildrenFromAttribute = (attr: string, value: unknown, item: DomItem = documentItem.body): DomItem[] =>
  gatherChildItems(
    item,
    getChildTest(attr, value)
  )

export default getChildrenFromAttribute
