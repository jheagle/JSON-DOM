import 'core-js/stable'

/**
 * Provide compatibility for using the options parameter of addEventListener
 * @function
 * @memberOf module:domFunctions
 * @param {EventListenerOptions} options - An object or boolean with the listener options
 * @returns {boolean}
 */
const listenerOptions = options => {
  if (typeof listenerOptions.supportsOptions === 'undefined') {
    // Check if supportsOptions has been defined. This is a compatibility checking flag.
    listenerOptions.supportsOptions = true
    try {
      // If it is possible to use OptionsObject, then set our flag to true
      window.addEventListener('test', null, { capture: false, once: false, passive: false })
    } catch (err) {
      // When using an OptionsObjects fails, it is only possible to pass the boolean UseCapture as the option
      listenerOptions.supportsOptions = false
    }
  }
  return (typeof options === 'object' && listenerOptions.supportsOptions) ? options : false
}

export default listenerOptions