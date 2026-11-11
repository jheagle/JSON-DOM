/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { DomItem } from '../../domItem/types'
import type { EventHandler, EventProxy, ListenerFunction } from '../types'

/**
 * Prepare a listener to be used before assigning to an element.
 * @param listener
 * @param item
 * @param args
 */
const makeEventHandler = (listener: ListenerFunction, item: DomItem, ...args: unknown[]): EventHandler => {
  return (event) => {
    if (!event || (event as EventProxy).immediatePropagationStopped) {
      return event
    }
    return listener(event, item, ...args)
  }
}

export default makeEventHandler
