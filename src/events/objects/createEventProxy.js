import 'core-js/stable'

/**
 * A wrapped Event which provides additional utilities.
 * @typedef {Event} EventProxy
 * @memberOf module:domEvents
 * @property {boolean} immediatePropagationStopped
 */

/**
 * Return a modified version of the event.
 * @function
 * @memberOf module:domEvents
 * @param {Event} event
 * @returns {EventProxy}
 */
const createEventProxy = event => new Proxy(
  Object.defineProperty(event, 'immediatePropagationStopped', {
    enumerable: true,
    value: false,
    writable: true
  }),
  {
    get (thisEvent, prop) {
      if (prop === 'stopImmediatePropagation') {
        thisEvent.immediatePropagationStopped = true
      }
      return Reflect.get(...arguments)
    }
  }
)

export default createEventProxy
