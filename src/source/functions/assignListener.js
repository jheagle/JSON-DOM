import 'core-js/stable'
import listenerOptions from './listenerOptions'

/**
 * Provide compatibility for assigning listeners.
 * @function
 * @memberOf module:domFunctions
 * @param {HTMLElementEventMap} trigger - The name of the event which will trigger the listenerFunction on the element.
 * @param {HTMLElement} elem - An element to append the listener onto
 * @param {module:domObjects~listenerFunction|function} fn - The function which will be invoked when the
 * event is triggered
 * @param {module:domObjects~EventListenerOptions} options - Additional options to how the event will be
 * fired
 * @returns {module:domObjects~listenerFunction|function}
 */
const assignListener = (trigger, elem, fn, options) => {
  // Attaching a listener may be done differently based on the browser support
  if (elem.addEventListener) {
    // Latest support is provided fro addEventListener with the options parameter varying slightly
    elem.addEventListener(trigger, fn, listenerOptions(options))
  } else if (elem.attachEvent) {
    // Older browsers, especially Internet Explorer
    elem.attachEvent(`on${trigger}`, fn)
  } else {
    // General support for adding a new function onto the element which can be called to trigger the function
    elem[`on${trigger}`] = fn
  }
  return fn
}

export default assignListener
