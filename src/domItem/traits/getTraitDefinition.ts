/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import definitions from './definitions'
import type { TraitDefinition } from '../types'

/**
 * The runtime definition of a trait, if it was defined.
 * @param name - The name of the trait.
 */
const getTraitDefinition = (name: string): TraitDefinition | undefined => definitions.get(name)

export default getTraitDefinition
