/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import activateListener from './activateListener'
import applyActiveListeners from './applyActiveListeners'
import type { DomItem } from '../../domItem/types'

/**
 * Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.
 * @param item - The DomItem which has eventListeners to apply to its element
 */
const bindElementListeners = (item: DomItem): DomItem => {
  for (const eventName in item.eventListeners) {
    const listeners = item.eventListeners[eventName]
    listeners.forEach(
      (eventAttributes) => {
        if (eventAttributes.listenerActive) {
          return
        }
        item = activateListener(eventName, eventAttributes, item)
        eventAttributes.listenerActive = true
      }
    )
    item = applyActiveListeners(eventName, item)
  }
  return item
}

export default bindElementListeners
