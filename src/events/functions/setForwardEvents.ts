/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import getDocumentItem from '../../domItem/objects/documentItem'
import type { DomItemRoot } from '../../domItem/types'
import type { ForwardEventsFunction } from '../types'

/**
 * Switch the root item into render-only mode: every registered listener name resolves to a forwarder instead of a
 * local function (see retrieveListener, makeForwardingListener), so no local listener functions need to be
 * registered at all.
 * @param transport - Called with the envelope of each forwarded event.
 * @param parent - The parent DomItem which is DomItemRoot to switch into render-only mode.
 */
const setForwardEvents = (transport: ForwardEventsFunction, parent: DomItemRoot = getDocumentItem()): DomItemRoot => {
  parent.forwardEvents = transport
  return parent
}

export default setForwardEvents
