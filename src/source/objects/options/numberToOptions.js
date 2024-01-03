import 'core-js/stable'
import siFunciona from 'si-funciona'

/**
 * Take an integer representation of the listener options and convert them to the listener options object.
 * @function
 * @memberOf module:optionFlags
 * @param {OptionsTemplate} optionsTemplate
 * @param {int} binaryOptions
 * @returns {EventListenerOptions}
 */
const numberToOptions = (optionsTemplate, binaryOptions) => siFunciona.mapObject(
  optionsTemplate,
  (flag) => !!(binaryOptions & flag)
)

export default numberToOptions
