import 'core-js/stable'
import getTopParentItem from '../../general/functions/getTopParentItem.js'
import makeEventHandler from './makeEventHandler.js'
import createEventResponder from '../objects/createEventResponder.js'
import getListenerOptions from '../objects/options/getListenerOptions.js'
import optionsToNumber from '../objects/options/optionsToNumber.js'
import retrieveListener from './retrieveListener.js'

/**
 * Activate listener by pushing it to activeListeners.
 * @function
 * @memberOf module:domEvents
 * @param {EventName} eventName
 * @param {EventListener} eventListener
 * @param {DomItem} item
 * @returns {DomItem}
 */
const activateListener = (eventName, eventListener, item) => {
  const listenerOptions = getListenerOptions()
  if (typeof item.activeListeners === 'undefined') {
    item.activeListeners = {}
  }
  if (!(eventName in item.activeListeners)) {
    item.activeListeners[eventName] = {}
  }
  const optionIdentifier = optionsToNumber(listenerOptions, eventListener.listenerOptions)
  if (!(optionIdentifier in item.activeListeners[eventName])) {
    item.activeListeners[eventName][optionIdentifier] = []
  }
  const listenerFunc = retrieveListener(eventListener.listenerFunc, getTopParentItem(item))
  const eventHandler = makeEventHandler(listenerFunc, item, eventListener.listenerArgs)
  const eventResponder = createEventResponder(eventHandler, !!(optionIdentifier & listenerOptions.signal))
  item.activeListeners[eventName][optionIdentifier].push(eventResponder)
  eventListener.activeResponder = eventResponder
  return item
}

export default activateListener
