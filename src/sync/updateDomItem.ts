/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import siFunciona from 'si-funciona'
import elementChanges from '../diff/elementChanges'
import { forgetApplied } from '../diff/appliedSnapshot'
import type { DomItem } from '../domItem/types'

/**
 * Update a single objects.DomItem element with the provided attributes / style / elementProperties
 * @param config - The DomItem having config changes to be applied to its
 * element
 */
const updateDomItem = (config: DomItem): DomItem => {
  if (!config.element) {
    // if element is not a valid element then return the config without changes
    return config
  }
  const changes = elementChanges(config)
  for (const dotKey in changes.removed) {
    const attributeKey = siFunciona.strAfter(dotKey, '.')
    if (siFunciona.strBefore(attributeKey, '.') === 'className') {
      const classList = (config.attributes.className as string).split(' ')
      classList.splice(siFunciona.strAfterLast(attributeKey, '.'), 1)
      config.attributes.className = classList.join(' ')
      continue
    }
    siFunciona.dotUnset(config as unknown as Record<string, unknown>, dotKey)
  }
  for (const dotKey in changes.added) {
    const attributeKey = siFunciona.strAfter(dotKey, '.')
    if (siFunciona.strBefore(attributeKey, '.') === 'className') {
      const classList = (config.attributes.className as string).split(' ')
      classList.push(changes.added[dotKey])
      config.attributes.className = classList.join(' ')
      continue
    }
    siFunciona.dotSet(config as unknown as Record<string, unknown>, dotKey, changes.added[dotKey])
  }
  // The item now holds what the element has, which may not be what treeloom last wrote: compare the next update with
  // the element itself again, or setting the item back to the old value would look like no change at all
  forgetApplied(config.element)
  return config
}

export default updateDomItem
