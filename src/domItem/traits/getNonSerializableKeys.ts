/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import definitions from './definitions'
import type { CoreItem } from '../types'

/**
 * The properties an item has only because of its traits, and which do not belong in json (the element of the render
 * trait, for one).
 * @param item - The item to look at.
 * @private
 */
const getNonSerializableKeys = (item: CoreItem): string[] => Object.keys(item.has ?? {}).flatMap(trait => {
  const definition = definitions.get(trait)
  return definition && definition.serializable === false ? definition.keys : []
})

export default getNonSerializableKeys
