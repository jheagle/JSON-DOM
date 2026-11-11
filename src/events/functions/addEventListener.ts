/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import createEventListener from '../objects/createEventListener'
import type { DomItem } from '../../domItem/types'
import type { EventName, ListenerFunction, ListenerOptions } from '../types'

/**
 * Create an EventListener descriptor and push it onto a DomItem's eventListeners for the given event name.
 * Does not attach anything to the real element - see {@link bindListeners} or {@link fullAddEventListener} for that.
 *
 * item is the last parameter (instead of customArgs/options having literal defaults) so this can be curried and
 * piped directly - see {@link fullAddEventListener} for an example.
 *
 * Prefer calling this through {@link fullAddEventListener} with a registered name (see {@link registerListener}).
 * Passing a raw function directly here works, but logs a console warning - see {@link EventListener}'s
 * listenerFunc property for what that discretionary path gives up.
 * @param eventName - The name of the trigger event (e.g. 'click').
 * @param listenerFunction - Preferably a name registered via
 * {@link registerListener}; a raw listener function is also accepted, at the caller's discretion.
 * @param customArgs - Additional args passed through to the listener when called.
 * @param options - Options to be used when the listener is attached
 * to the element.
 * @param item - The DomItem which will receive the event listener.
 * @returns The same DomItem, with the new EventListener descriptor appended.
 */
const addEventListener = (eventName: EventName, listenerFunction: string | ListenerFunction, customArgs: object | null | undefined, options: ListenerOptions | null | undefined, item: DomItem): DomItem => {
  customArgs = customArgs ?? null
  options = options ?? false
  if (typeof listenerFunction === 'function') {
    console.warn(
      `addEventListener: attaching a raw function directly for "${eventName}" instead of a name registered via ` +
      'registerListener. This works, but the listener will not be discoverable via eventActions, cannot be ' +
      'shared by name across DomItems, and will be silently dropped by domItemToJson (JSON.stringify omits ' +
      'function values). Prefer fullAddEventListener with a name unless this one-off behavior is intentional.'
    )
  }
  if (typeof item.eventListeners === 'undefined') {
    item.eventListeners = {}
  }
  if (typeof item.eventListeners[eventName] === 'undefined') {
    item.eventListeners[eventName] = []
  }
  // check if the listener already exists and don't add if it does
  item.eventListeners[eventName].push(
    createEventListener({
      listenerFunc: listenerFunction,
      listenerArgs: customArgs,
      listenerOptions: options
    })
  )
  return item
}

export default addEventListener
