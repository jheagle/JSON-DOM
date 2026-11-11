/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import siFunciona from 'si-funciona'
import getParentsFromAttribute from './getParentsFromAttribute'
import type { DomItem } from '../types'

/**
 * Helper for getting all domGeneral.DomItems starting at child and having specified nodeName
 * @param nodeName - The nodeName to search for
 * @param item - The DomItem which may have parent items matching the
 * attribute criteria
 */
const getParentsByTagName: (nodeName: string, item?: DomItem) => DomItem[] = siFunciona.curry(getParentsFromAttribute)('nodeName')

export default getParentsByTagName
