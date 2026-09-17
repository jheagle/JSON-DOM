import 'core-js/stable'
import listenerOptions from './listenerOptions.js'

/**
 * Provide compatibility for unassigning listeners.
 * @function
 * @memberOf module:domEvents
 * @param {string} trigger - The name of the event which will trigger the listenerFunction on the element. (keyof HTMLElementEventMap)
 * @param {EventTarget|MicrosoftHtmlObject} elem - An element to append the listener onto
 * @param {EventListenerOrEventListenerObject|null} fn - The function which will be invoked when the
 * event is triggered
 * @param {EventListenerOptions|boolean} options - Additional options to how the event will be
 * fired
 * @returns {listenerFunction|Function}
 */
const unassignListener = (trigger, elem, fn, options = false) => {
  // Removing a listener may be done differently based on the browser support
  if (elem.removeEventListener) {
    // Latest support is provided from removeEventListener with the options parameter varying slightly
    elem.removeEventListener(trigger, fn, listenerOptions(options))
  }
  return fn
}

export default unassignListener
