'use strict'

const __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule
    ? mod
    : {
        default: mod
      }
}
Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
const si_funciona_1 = __importDefault(require('si-funciona'))
const getListenerOptions_1 = __importDefault(require('../objects/options/getListenerOptions'))
const optionsToNumber_1 = __importDefault(require('../objects/options/optionsToNumber'))
const numberToOptions_1 = __importDefault(require('../objects/options/numberToOptions'))
const unassignListener_1 = __importDefault(require('./unassignListener'))
/**
 * Deactivate a single listener: detach it from the element (if it was actually attached) and remove it from
 * activeListeners, without disturbing any other listener sharing the same options bucket.
 * @param eventName - The name of the trigger event the listener was activated under.
 * @param eventListener - The EventListener descriptor to deactivate, as found via
 * {@link findEventListener} or returned from {@link activateListener}.
 * @param item - The DomItem the listener is attached to.
 * @returns The same DomItem, with this listener detached and marked inactive.
 */
const deactivateListener = (eventName, eventListener, item) => {
  const eventOptions = si_funciona_1.default.dotGet(item, `activeListeners.${eventName}`)
  if (eventOptions === null || !eventListener.activeResponder) {
    return item
  }
  const listenerOptions = (0, getListenerOptions_1.default)()
  const optionIdentifier = (0, optionsToNumber_1.default)(listenerOptions, eventListener.listenerOptions)
  const active = item.activeListeners
  const bucket = active[eventName][optionIdentifier]
  if (!bucket) {
    return item
  }
  if (eventListener.activeResponder.assignedHandler) {
    const optionsToUse = (0, numberToOptions_1.default)(listenerOptions, optionIdentifier)
    const finalOptions = optionsToUse.signal
      ? Object.assign({}, optionsToUse, {
        signal: eventListener.activeResponder.abort.signal
      })
      : (delete optionsToUse.signal, optionsToUse);
    (0, unassignListener_1.default)(eventName, item.element, eventListener.activeResponder.assignedHandler, finalOptions)
  }
  const responderIndex = bucket.indexOf(eventListener.activeResponder)
  if (responderIndex > -1) {
    bucket.splice(responderIndex, 1)
  }
  if (bucket.length === 0) {
    delete active[eventName][optionIdentifier]
  }
  eventListener.activeResponder = null
  eventListener.listenerActive = false
  return item
}
exports.default = deactivateListener
