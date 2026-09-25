'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
/**
 * Prepare an eventListener object to attach to a DOMItem
 * @param listenerProperties
 * @param listenerProperties.listenerFunc - The function or name (string) of the listener
 * action - see {@link EventListener}'s listenerFunc property for when to use which.
 * @param listenerProperties.listenerArgs - Additional parameters to apply to the function
 * @param listenerProperties.listenerOptions - The listener options to apply to the element
 * @param listenerProperties.listenerActive - Flag for listener applied to element
 * @returns An EventListener descriptor ready to be pushed onto a DomItem's eventListeners
 */
const createEventListener = ({
  listenerFunc,
  listenerArgs = null,
  listenerOptions = false,
  listenerActive = false
} = {}) => ({
  listenerFunc,
  listenerArgs,
  listenerOptions,
  listenerActive
})
exports.default = createEventListener
