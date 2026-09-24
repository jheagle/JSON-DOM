import 'core-js/stable'
import type { OptionsTemplate } from '../../types'

const CAPTURE = 1
const ONCE = 2
const PASSIVE = 4
const SIGNAL = 8

/**
 * Retrieve the OptionsTemplate for EventListenerOptions.
 * @function
 * @memberOf module:optionFlags
 * @returns {OptionsTemplate}
 */
const getListenerOptions = (): OptionsTemplate => ({
  capture: CAPTURE,
  once: ONCE,
  passive: PASSIVE,
  signal: SIGNAL
})

export default getListenerOptions
