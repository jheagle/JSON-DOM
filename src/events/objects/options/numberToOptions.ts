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
