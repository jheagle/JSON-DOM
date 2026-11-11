/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import updateChildNodes from './updateChildNodes'
import updateElement from './updateElement'
import type { DomItem } from '../domItem/types'

/**
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @param config - The DomItem having child DomItems with config changes to be
 * applied
 */
const updateElements = (config: DomItem): DomItem => {
  if (config.nodeName === '#document') {
    for (const child of config.children) {
      updateElements(child)
    }
    return config
  }
  const domItem = updateChildNodes(updateElement(config))
  domItem.children.forEach(updateElements)
  return domItem
}

export default updateElements
