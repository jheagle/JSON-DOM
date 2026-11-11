/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * The render-only subset of json-dom: build and sync a Virtual DOM (DomItem tree) to the real
 * HTML DOM, and forward fired events elsewhere (see events/objects/setForwardEvents) instead of
 * running local business logic - a consumer that never needs to run that logic locally never
 * needs to go the other way (DOM back to JSON) either, so this excludes deflate, the one part of
 * the full build with no other internal code path depending on it.
 */

import events from './events/index'
import domItem from './domItem/index'
import inflate from './inflate/index'
import render from './render/index'
import sync from './sync/index'
import diff from './diff/index'

const jsonDomRenderOnly = Object.assign(
  {},
  events,
  domItem,
  inflate,
  render,
  sync,
  diff
)

// export = , not export default - see main.ts's own note on why.
export = jsonDomRenderOnly
