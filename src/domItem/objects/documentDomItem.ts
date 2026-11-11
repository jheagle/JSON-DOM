/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createDomItem from './createDomItem'
import initChildren from './initChildren'
import initRoot from './initRoot'
import updateDomItems from '../../sync/updateDomItems'
import type { DomItemRoot } from '../types'
import type { ListenerFunction } from '../../events/types'

/**
 * Return the root DomItem of a Virtual DOM (DomItem tree) for the document. The rootItem argument is a system
 * variable and not necessary to implement.
 * @param listeners - An object of all event
 * listeners to be registered in the Dom
 * @param rootItem - This is a
 * reference to DomItemRoot which will be defaulted with {@link initRoot}
 */
const documentDomItem = (listeners: Record<string, ListenerFunction> = {}, rootItem: DomItemRoot = initRoot(initChildren(), listeners)): DomItemRoot => {
  rootItem.children = rootItem.children.map(child => createDomItem(child))
  rootItem.children.map(child => {
    child.parentItem = rootItem
    return child
  })
  rootItem.head = rootItem.children[0]
  rootItem.body = rootItem.children[1]
  return updateDomItems(createDomItem(rootItem)) as DomItemRoot
}

export default documentDomItem
