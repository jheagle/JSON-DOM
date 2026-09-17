import 'core-js/stable'
import createEventListener from '../objects/createEventListener'

const addEventListener = (item, eventName, listenerFunction, customArgs = null, options = false) => {
  if (typeof item.eventListeners === 'undefined') {
    item.eventListeners = {}
  }
  if (typeof item.eventListeners[eventName] === 'undefined') {
    item.eventListeners[eventName] = []
  }
  // check if the listener already exists and don't add if it does
  item.eventListeners[eventName].push(
    createEventListener({
      listenerFunc: listenerFunction,
      listenerArgs: customArgs,
      listenerOptions: options
    })
  )
  return item
}

export default addEventListener
