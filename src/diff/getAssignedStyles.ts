/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import siFunciona from 'si-funciona'
import type { StyleValues } from '../domItem/types'

/**
 * Get all the styles which have been assigned to this element. Assigned styles are indicated as numeric-key
 * properties with a value indicating the string-key property which has been assigned. The string-key properties
 * have the assigned values.
 * @param elementStyles
 */
const getAssignedStyles = (elementStyles: CSSStyleDeclaration | StyleValues): StyleValues => siFunciona.reduceObject(
  elementStyles as StyleValues,
  (styles: StyleValues, attr: string, key: string) => Number.isNaN(Number(key))
    ? styles
    : siFunciona.setValue(attr, (elementStyles as StyleValues)[attr], styles),
  {}
)

export default getAssignedStyles
