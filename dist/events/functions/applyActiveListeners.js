'use strict'

require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
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
const numberToOptions_1 = __importDefault(require('../objects/options/numberToOptions'))
const assignListener_1 = __importDefault(require('./assignListener'))
const createEventProxy_1 = __importDefault(require('../objects/createEventProxy'))
/**
 * Apply each active event listener for event type to the DOM Item's element.
 * @param eventName
 * @param item
 */
const applyActiveListeners = (eventName, item) => {
  const listenerOptions = (0, getListenerOptions_1.default)()
  const eventOptions = si_funciona_1.default.dotGet(item, `activeListeners.${eventName}`)
  if (eventOptions === null) {
    return item
  }
  si_funciona_1.default.objectKeys(eventOptions).forEach(binaryOptions => {
    const optionsToUse = (0, numberToOptions_1.default)(listenerOptions, parseInt(binaryOptions))
    const usesSignal = !!optionsToUse.signal
    if (!usesSignal) {
      // Abort signal must be undefined if it is not required.
      delete optionsToUse.signal
    }
    ;
    item.activeListeners[eventName][Number(binaryOptions)].forEach(eventResponder => {
      if (eventResponder.assignedHandler) {
        // already attached to the element
        return
      }
      const finalOptions = usesSignal
        ? Object.assign({}, optionsToUse, {
          signal: eventResponder.abort.signal
        })
        : optionsToUse
      eventResponder.assignedHandler = e => eventResponder.handler((0, createEventProxy_1.default)(e, item));
      (0, assignListener_1.default)(eventName, item.element, eventResponder.assignedHandler, finalOptions)
    })
  })
  return item
}
exports.default = applyActiveListeners
