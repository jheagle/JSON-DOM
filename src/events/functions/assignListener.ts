import 'core-js/stable'
import listenerOptions from './listenerOptions'

/**
 * Document attachEvent support for older browsers.
 * @typedef {EventTarget} MicrosoftHtmlObject
 * @memberOf module:domEvents
 * @property {Function} attachEvent
 */

/**
 * Provide compatibility for assigning listeners.
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
const assignListener = (trigger, elem, fn, options = false) => {
  // Attaching a listener may be done differently based on the browser support
  if (elem.addEventListener) {
    // Latest support is provided from addEventListener with the options parameter varying slightly
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
