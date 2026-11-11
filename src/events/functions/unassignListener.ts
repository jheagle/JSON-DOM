/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import listenerOptions from './listenerOptions'
import type { EventHandler, ListenerOptions, ListenerTarget } from '../types'

/**
 * Provide compatibility for unassigning listeners.
 * @param trigger - The name of the event which will trigger the listenerFunction on the element. (keyof HTMLElementEventMap)
 * @param elem - An element to append the listener onto
 * @param fn - The function which will be invoked when the
 * event is triggered
 * @param options - Additional options to how the event will be
 * fired
 */
const unassignListener = (trigger: string, elem: ListenerTarget, fn: EventHandler, options: ListenerOptions = false): EventHandler => {
  // Removing a listener may be done differently based on the browser support
  if (elem.removeEventListener) {
    // Latest support is provided from removeEventListener with the options parameter varying slightly
    elem.removeEventListener(trigger, fn, listenerOptions(options) as EventListenerOptions | boolean)
  }
  return fn
}

export default unassignListener
