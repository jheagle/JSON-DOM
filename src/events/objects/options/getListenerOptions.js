import 'core-js/stable'

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
const getListenerOptions = () => ({
  capture: CAPTURE,
  once: ONCE,
  passive: PASSIVE,
  signal: SIGNAL,
})

export default getListenerOptions
