/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { ChildTest, DomItem } from '../types'

/**
 * A selector function for retrieving existing child domGeneral.DomItems from the given parent item.
 * This function will check all the children starting from and including item, and run the test function on each
 * child encountered. The return array contains children returned from the test from all levels.
 * WARNING: This is a recursive function.
 * @param item - The DomItem which may have child items matching the attribute
 * criteria
 * @param test - Assess each child, and return the ones which qualify
 */
const gatherChildItems = (item: DomItem, test: ChildTest): DomItem[] => test(
  item,
  item.children.reduce((a: DomItem[], b) => a.concat(gatherChildItems(b, test)), [])
)

export default gatherChildItems
