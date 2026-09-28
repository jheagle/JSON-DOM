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
const getItemPath_1 = __importDefault(require('../../domItem/tree/getItemPath'))
/**
 * Build the listener function used in render-only mode: instead of running real logic locally, it packages the
 * event as a plain envelope (the path to the item it fired on, the event type, the registered listener name and any
 * custom args) and hands it to the injected transport function. See retrieveListener.
 * @param listenerName - The registered name this forwarder stands in for.
 * @param transport - Where the envelope is sent (set on the root item with setForwardEvents).
 */
const makeForwardingListener = (listenerName, transport) => (event, item, ...args) => transport({
  itemPath: (0, getItemPath_1.default)(event.domItemTarget ?? item),
  eventType: event.type,
  listenerFunc: listenerName,
  data: args
})
exports.default = makeForwardingListener
