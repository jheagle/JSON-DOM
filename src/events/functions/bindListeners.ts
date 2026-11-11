/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import bindElementListeners from './bindElementListeners'
import siFunciona from 'si-funciona'
import type { DomItem } from '../../domItem/types'

/**
 * Based on the eventListeners property of the provided item, bind the
 * listeners to the associated element property for the provided domEvents.DomItem.
 * @param item - The DomItem which may have eventListeners to apply to its
 * element
 */
const bindListeners = (item: DomItem): DomItem =>
  (!siFunciona.emptyObject(item.eventListeners) && item.element)
    ? bindElementListeners(item)
    : item

export default bindListeners
