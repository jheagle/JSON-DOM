/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * All of the JSON DOM system functions for building and syncing a Virtual DOM (DomItem tree) to the real HTML DOM.
 */

import events from './events/index'
import domItem from './domItem/index'
import { withDocumentItem } from './domItem/objects/documentItem'
import inflate from './inflate/index'
import deflate from './deflate/index'
import render from './render/index'
import sync from './sync/index'
import diff from './diff/index'

// documentItem is a getter (see withDocumentItem), so loading treeloom never touches a real document
const treeloom = withDocumentItem(Object.assign(
  {},
  events,
  domItem,
  inflate,
  deflate,
  render,
  sync,
  diff
))

// `export =` (not `export default`) so the compiled module.exports IS treeloom directly, not
// { default: treeloom } - browserify's standalone UMD wrapper exposes a bundle's module.exports
// as the global/CommonJS/AMD value verbatim, so a default export would otherwise surface as
// window.treeloom.default instead of window.treeloom itself.
export = treeloom
