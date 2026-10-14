import 'core-js/stable'
import type { ListenerOptions } from '../types'

/** The options which will be used, and a flag remembering whether the browser understands an options object. */
type ListenerOptionsSupport = {
  (options?: ListenerOptions | null): ListenerOptions | null
  supportsOptions?: boolean
}

/**
 * Provide compatibility for using the options parameter of addEventListener
 * @param options - An object or boolean with the listener options
 */
const listenerOptions: ListenerOptionsSupport = (options) => {
  if (typeof listenerOptions.supportsOptions === 'undefined') {
    // Check if supportsOptions has been defined. This is a compatibility checking flag.
    listenerOptions.supportsOptions = true
    try {
      // If it is possible to use OptionsObject, then set our flag to true
      window.addEventListener('test', null as unknown as EventListener, { capture: false, once: false, passive: false })
    } catch (err) {
      // When using an OptionsObjects fails, it is only possible to pass the boolean UseCapture as the option
      listenerOptions.supportsOptions = false
    }
  }
  return (typeof options === 'object' && listenerOptions.supportsOptions) ? options : false
}

export default listenerOptions
