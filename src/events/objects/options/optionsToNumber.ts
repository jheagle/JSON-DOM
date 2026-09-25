import 'core-js/stable'
import siFunciona from 'si-funciona'
import type { ListenerOptions, OptionsTemplate } from '../../types'

/**
 * Take the given options and convert them (using binary) to an integer. Given listener options, each one is assigned a
 * bitwise position. The resulting binary number represents any possible combination of the available flags set.
 * @function
 * @memberOf module:optionFlags
 * @param {OptionsTemplate} optionsTemplate
 * @param {Options|Option} listenerOptions
 * @returns {int}
 */
const optionsToNumber = (optionsTemplate: OptionsTemplate, listenerOptions?: ListenerOptions | null): number => {
  if (!listenerOptions) {
    return 0
  }
  return siFunciona.reduceObject(
    optionsTemplate,
    (binaryOptions: number, flag: number, name: string) => (listenerOptions as Record<string, unknown>)[name] ? binaryOptions | flag : binaryOptions,
    0
  )
}

export default optionsToNumber
