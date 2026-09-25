'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
/**
 * Store the handler function and associated abort controller instance if available to be used when events are triggered.
 * @param eventHandler - The eventHandler wrapped function to be called for the event.
 * @param abort - Assign an AbortSignal provided or create one (if true), otherwise null.
 */
const createEventResponder = (eventHandler, abort = null) => {
  if (abort === true) {
    abort = new AbortController()
  }
  if (abort === false) {
    abort = null
  }
  return Object.assign({}, {
    handler: eventHandler,
    abort,
    assignedHandler: null
  })
}
exports.default = createEventResponder
