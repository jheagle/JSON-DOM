/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import siFunciona from 'si-funciona'
import getAssignedStyles from './getAssignedStyles'
import type { DomItem, StyleValues } from '../domItem/types'
import type { AttributeComparison } from './types'

/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param domItem
 * @param attr
 */
const checkStyles = (domItem: DomItem, attr: StyleValues = {}): AttributeComparison => {
  const assignedStyles = domItem.attributes.style ?? {}
  if (siFunciona.emptyObject(assignedStyles)) {
    return 1
  }
  return siFunciona.compareArrays(
    Object.keys(getAssignedStyles(attr)).map(siFunciona.camelCase),
    Object.keys(assignedStyles)
  )
}

/**
 * For attributes which are objects or multipart strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param domItem
 * @param attr
 */
const checkClasses = (domItem: DomItem, attr: string = ''): AttributeComparison => {
  const assignedClasses = domItem.attributes.className ?? ''
  if (!assignedClasses.length) {
    return 1
  }
  return siFunciona.compareArrays(
    attr.split(' '),
    (assignedClasses).split(' ')
  )
}

/**
 * Check if the provided DomItem has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @param domItem - Receive the DomItem to be assessed
 * @param key - The attribute name to search for
 * @param attr - The expected value of the attribute to compare against
 */
const domItemHasAttribute = (domItem: DomItem, key: string, attr: unknown): AttributeComparison => {
  if (key === 'style') {
    return checkStyles(domItem, attr as StyleValues)
  }
  if (key === 'className') {
    return checkClasses(domItem, attr as string)
  }
  const camelKey = siFunciona.camelCase(key)
  if (typeof domItem.attributes[camelKey] === 'undefined') {
    return 1
  }
  if (domItem.attributes[camelKey] === attr) {
    return 0
  }
  return 1
}

export default domItemHasAttribute
