/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import removeEventListener from './removeEventListener'
import type { DomItem } from '../../domItem/types'
import type { EventName, ListenerFunction, ListenerOptions } from '../types'

/**
 * Find and remove a listener that was registered by name (e.g. via {@link fullAddEventListener}) - the counterpart
 * to fullAddEventListener. Resolves name the same way fullAddEventListener defaults it, so a caller only needs the
 * original listener function (not the internal name string it was registered under) to remove it:
 * 1. Resolve name (defaults to listener.name, same as {@link fullAddEventListener}).
 * 2. {@link removeEventListener} - find the descriptor by that name, detach it from the element if active, and
 *    splice it out of item.eventListeners.
 *
 * Does not remove the function from the root DomItem's eventActions registry, since that name may still be shared
 * by other DomItems - see {@link registerListener}.
 * @param eventName - The name of the trigger event (e.g. 'click').
 * @param listener - The same function originally passed to fullAddEventListener.
 * @param name - The name the listener was registered under in eventActions.
 * @param customArgs - The custom args the listener was registered with.
 * @param options - The options the listener was registered with.
 * @param item - The DomItem to remove the listener from.
 * @returns The same DomItem, with the matching listener removed if one was found.
 */
const fullRemoveEventListener = (eventName: EventName, listener: ListenerFunction, name: string | null | undefined, customArgs: object | null | undefined, options: ListenerOptions | null | undefined, item: DomItem): DomItem => {
  const listenerName = name ?? listener.name
  return removeEventListener(eventName, listenerName, customArgs, options, item)
}

export default fullRemoveEventListener
