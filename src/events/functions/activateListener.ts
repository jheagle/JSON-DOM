/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import getTopParentItem from '../../domItem/tree/getTopParentItem'
import makeEventHandler from './makeEventHandler'
import createEventResponder from '../objects/createEventResponder'
import getListenerOptions from '../objects/options/getListenerOptions'
import optionsToNumber from '../objects/options/optionsToNumber'
import retrieveListener from './retrieveListener'
import type { DomItem } from '../../domItem/types'
import type { EventName, ListenerDescriptor } from '../types'

/**
 * Activate listener by pushing it to activeListeners.
 * @param eventName
 * @param eventListener
 * @param item
 */
const activateListener = (eventName: EventName, eventListener: ListenerDescriptor, item: DomItem): DomItem => {
  const listenerOptions = getListenerOptions()
  if (typeof item.activeListeners === 'undefined') {
    item.activeListeners = {}
  }
  if (!(eventName in item.activeListeners)) {
    item.activeListeners[eventName] = {}
  }
  const optionIdentifier = optionsToNumber(listenerOptions, eventListener.listenerOptions)
  if (!(optionIdentifier in item.activeListeners[eventName])) {
    item.activeListeners[eventName][optionIdentifier] = []
  }
  const listenerFunc = retrieveListener(eventListener.listenerFunc, getTopParentItem(item))
  const eventHandler = makeEventHandler(listenerFunc, item, eventListener.listenerArgs)
  const eventResponder = createEventResponder(eventHandler, !!(optionIdentifier & listenerOptions.signal))
  item.activeListeners[eventName][optionIdentifier].push(eventResponder)
  eventListener.activeResponder = eventResponder
  return item
}

export default activateListener
