/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { ListenerDescriptor } from '../types'

/**
 * Prepare an eventListener object to attach to a DOMItem
 * @param listenerProperties
 * @param listenerProperties.listenerFunc - The function or name (string) of the listener
 * action - see {@link EventListener}'s listenerFunc property for when to use which.
 * @param listenerProperties.listenerArgs - Additional parameters to apply to the function
 * @param listenerProperties.listenerOptions - The listener options to apply to the element
 * @param listenerProperties.listenerActive - Flag for listener applied to element
 * @returns An EventListener descriptor ready to be pushed onto a DomItem's eventListeners
 */
const createEventListener = ({
  listenerFunc,
  listenerArgs = null,
  listenerOptions = false,
  listenerActive = false
}: Partial<ListenerDescriptor> = {}): ListenerDescriptor => (
  {
    listenerFunc: listenerFunc as ListenerDescriptor['listenerFunc'],
    listenerArgs,
    listenerOptions,
    listenerActive
  }
)

export default createEventListener
