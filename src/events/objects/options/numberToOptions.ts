import 'core-js/stable'
import siFunciona from 'si-funciona'
import type { OptionsObject, OptionsTemplate } from '../../types'

/**
 * Take an integer representation of the listener options and convert them to the listener options object.
 * @function
 * @memberOf module:optionFlags
 * @param {OptionsTemplate} optionsTemplate
 * @param {int} binaryOptions
 * @returns {EventListenerOptions}
 */
const numberToOptions = (optionsTemplate: OptionsTemplate, binaryOptions: number): OptionsObject => siFunciona.mapObject(
  optionsTemplate,
  (flag: number) => !!(binaryOptions & flag)
) as OptionsObject

export default numberToOptions
