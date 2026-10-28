import listenerOptions from './listenerOptions'
import type { EventHandler, ListenerOptions, ListenerTarget } from '../types'

/**
 * Provide compatibility for assigning listeners.
 * @param trigger - The name of the event which will trigger the listenerFunction on the element. (keyof HTMLElementEventMap)
 * @param elem - An element to append the listener onto
 * @param fn - The function which will be invoked when the
 * event is triggered
 * @param options - Additional options to how the event will be
 * fired
 */
const assignListener = (trigger: string, elem: ListenerTarget, fn: EventHandler, options: ListenerOptions = false): EventHandler => {
  // Attaching a listener may be done differently based on the browser support
  if (elem.addEventListener) {
    // Latest support is provided from addEventListener with the options parameter varying slightly
    elem.addEventListener(trigger, fn, listenerOptions(options) as AddEventListenerOptions | boolean)
  } else if (elem.attachEvent) {
    // Older browsers, especially Internet Explorer
    elem.attachEvent(`on${trigger}`, fn)
  } else {
    // General support for adding a new function onto the element which can be called to trigger the function
    ;(elem as unknown as Record<string, unknown>)[`on${trigger}`] = fn
  }
  return fn
}

export default assignListener
