/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { EventHandler, EventResponder } from '../types'

/**
 * Store the handler function and associated abort controller instance if available to be used when events are triggered.
 * @param eventHandler - The eventHandler wrapped function to be called for the event.
 * @param abort - Assign an AbortSignal provided or create one (if true), otherwise null.
 */
const createEventResponder = (eventHandler: EventHandler, abort: AbortController | boolean | null = null): EventResponder => {
  if (abort === true) {
    abort = new AbortController()
  }
  if (abort === false) {
    abort = null
  }
  return Object.assign(
    {},
    {
      handler: eventHandler,
      abort,
      assignedHandler: null
    }
  )
}

export default createEventResponder
