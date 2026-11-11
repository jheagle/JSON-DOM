/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import getDocumentItem from '../../domItem/objects/documentItem'
import makeForwardingListener from './makeForwardingListener'
import type { DomItemRoot } from '../../domItem/types'
import type { ListenerFunction } from '../types'

/**
 * Based on the provided function / listener name, retrieve the associated function from the root domEvents.DomItem.
 * If a raw function is passed instead of a registered name, it is returned as-is - see {@link EventListener}'s
 * listenerFunc property for the tradeoffs of that discretionary path. When the root has forwardEvents set (render-
 * only mode - see setForwardEvents), every name resolves to a forwarder instead, whether or not it is registered in
 * eventActions: see makeForwardingListener.
 * @param listenerName - The name of one of the registered listener functions, or an
 * already-resolved listener function.
 * @param parent - The parent DomItem which is DomItemRoot which stores eventListeners property.
 */
const retrieveListener = (listenerName: string | ListenerFunction, parent: DomItemRoot = getDocumentItem()): ListenerFunction => {
  if (typeof listenerName === 'function') {
    return listenerName
  }
  if (parent.forwardEvents) {
    return makeForwardingListener(listenerName, parent.forwardEvents)
  }
  if (!Object.keys(parent.eventActions).includes(listenerName)) {
    throw new Error(`Undefined listener function on this DomItemRoot: ${listenerName}`)
  }
  return parent.eventActions[listenerName]
}

export default retrieveListener
