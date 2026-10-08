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
const getItemByPath_1 = __importDefault(require('../../domItem/tree/getItemByPath'))
/**
 * The receiving end of makeForwardingListener's envelope: resolve the item it was built for, replay any live target
 * state it carried onto that item's real element (see captureTargetState in makeForwardingListener), then dispatch
 * a real event of the same type on it. The resolved item's own, already-bound listener runs exactly as it would for
 * a genuine local event - nothing here needs to know what that listener does.
 * @param root - The tree to resolve the envelope's itemPath against. Its listeners must be the real ones (not
 * itself set up with setForwardEvents), or this would just forward the event again instead of running it.
 * @param envelope - As produced by makeForwardingListener on the sending end.
 */
const receiveForwardedEvent = (root, envelope) => {
  const element = (0, getItemByPath_1.default)(root, envelope.itemPath).element
  if (!element) {
    throw new Error('The resolved item has no element to dispatch the event on.')
  }
  if (envelope.targetState) {
    Object.assign(element, envelope.targetState)
  }
  element.dispatchEvent(new Event(envelope.eventType, {
    bubbles: true,
    cancelable: true
  }))
}
exports.default = receiveForwardedEvent
