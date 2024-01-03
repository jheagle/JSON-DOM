import 'core-js/stable'

/**
 * Track an event handler and optional abort signal.
 * @typedef {Object} EventResponder
 * @memberOf module:domObjects
 * @property {eventHandler} handler
 * @property {AbortController|null} abort
 */

/**
 * Store the handler function and associated abort controller instance if available to be used when events are triggered.
 * @function
 * @memberOf module:domObjects
 * @param {eventHandler} eventHandler - The eventHandler wrapped function to be called for the event.
 * @param {AbortController|boolean|null} [abort=null] - Assign an AbortSignal provided or create one (if true), otherwise null.
 * @return {EventResponder}
 */
const createEventResponder = (eventHandler, abort = null) => {
  if (abort === true) {
    abort = new AbortController()
  }
  if (abort === false) {
    abort = null
  }
  return Object.assign(
    {},
    {
      handler: eventHandler,
      abort: abort,
    }
  )
}

export default createEventResponder
