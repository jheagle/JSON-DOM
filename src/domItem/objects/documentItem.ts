/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import documentDomItem from './documentDomItem'
import type { DomItemRoot } from '../types'

let existingItem: DomItemRoot | null = null

/**
 * The shared root DomItem of the Virtual DOM (DomItem tree) for this environment's real document.
 */
const documentItem: DomItemRoot = (() => {
  if (existingItem === null) {
    existingItem = documentDomItem()
  }
  return existingItem
})()

export default documentItem
