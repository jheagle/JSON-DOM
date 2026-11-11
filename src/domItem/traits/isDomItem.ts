/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import hasTrait from './hasTrait'
import type { CoreItem, DomItem } from '../types'

/**
 * Whether an item, and every item below it, has the render trait: the tree treeloom's render and sync functions work
 * on. hasTrait only checks the one item, so use this where a tree comes from somewhere else. It is also a type guard.
 * @param item - The item at the top of the tree to check.
 */
const isDomItem = (item: CoreItem): item is DomItem => hasTrait(item, 'render') && item.children.every(isDomItem)

export default isDomItem
