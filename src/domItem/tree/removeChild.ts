/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { unregisterItemIds } from './itemIdIndex'
import type { DomItem } from '../types'

/**
 * Reverse of appendHtml, remove a DomItem and have the associated element removed.
 * @param parent - The parent of the items
 * @param child - The DomItem with HTMLElement to be removed
 */
const removeChild = (parent: DomItem, child: DomItem): DomItem[] => {
  // Before detaching: child's own parentItem chain (still pointing at parent) is what resolves its root.
  unregisterItemIds(child)
  parent.element!.removeChild(child.element!)
  return parent.children.splice(parent.children.indexOf(child), 1)
}

export default removeChild
