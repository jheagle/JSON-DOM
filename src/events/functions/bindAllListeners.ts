/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import bindListeners from './bindListeners'
import type { DomItem } from '../../domItem/types'

/**
 * Based on the eventListeners property of the provided item, bind the listeners to the associated element property
 * for each item in the domEvents.DomItem structure.
 * WARNING: This is a recursive function.
 * @param item - The DomItem with an associated HTMLElement to have a listener
 * assigned
 */
const bindAllListeners = (item: DomItem): DomItem => {
  for (const child of item.children) {
    bindAllListeners(child)
  }
  return bindListeners(item)
}

export default bindAllListeners
