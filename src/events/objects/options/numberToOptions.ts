/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import siFunciona from 'si-funciona'
import type { OptionsObject, OptionsTemplate } from '../../types'

/**
 * Take an integer representation of the listener options and convert them to the listener options object.
 * @param optionsTemplate
 * @param binaryOptions
 */
const numberToOptions = (optionsTemplate: OptionsTemplate, binaryOptions: number): OptionsObject => siFunciona.mapObject(
  optionsTemplate,
  (flag: number) => !!(binaryOptions & flag)
) as OptionsObject

export default numberToOptions
