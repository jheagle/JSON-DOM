/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { TraitDefinition } from '../types'

/**
 * What each trait is at runtime, by name. render is the one json-dom brings; other libraries add theirs with
 * defineTrait.
 */
const definitions = new Map<string, TraitDefinition>([
  ['render', { keys: ['element', 'activeListeners'], serializable: false, defaults: () => ({ element: null }) }]
])

export default definitions
