/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import siFunciona from 'si-funciona'
import getParentsFromAttribute from './getParentsFromAttribute'
import type { DomItem } from '../types'

/**
 * Helper for getting all domGeneral.DomItems starting at child and having specified name attribute
 * @param name - The name to search for
 * @param item - The DomItem which may have parent items matching the
 * attribute criteria
 */
const getParentsByName: (name: string, item?: DomItem) => DomItem[] = siFunciona.curry(getParentsFromAttribute)('name')

export default getParentsByName
