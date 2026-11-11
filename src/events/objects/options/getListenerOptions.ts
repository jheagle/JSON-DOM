/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { OptionsTemplate } from '../../types'

const CAPTURE = 1
const ONCE = 2
const PASSIVE = 4
const SIGNAL = 8

/**
 * Retrieve the OptionsTemplate for EventListenerOptions.
 */
const getListenerOptions = (): OptionsTemplate => ({
  capture: CAPTURE,
  once: ONCE,
  passive: PASSIVE,
  signal: SIGNAL
})

export default getListenerOptions
