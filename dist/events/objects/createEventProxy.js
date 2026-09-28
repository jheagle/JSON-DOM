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
const getItemByElement_1 = __importDefault(require('../../domItem/query/getItemByElement'))
/**
 * Return a modified version of the event: adds domItemTarget and currentDomItemTarget, next to the real DOM's own
 * target and currentTarget.
 * @param event
 * @param item - The DomItem the listener is attached to (this event's currentTarget).
 */
const createEventProxy = (event, item) => new Proxy(Object.defineProperties(event, {
  immediatePropagationStopped: {
    enumerable: true,
    value: false,
    writable: true
  },
  currentDomItemTarget: {
    enumerable: true,
    value: item,
    writable: true
  },
  domItemTarget: {
    enumerable: true,
    value: (0, getItemByElement_1.default)(item, event.target),
    writable: true
  }
}), {
  get (thisEvent, prop) {
    if (prop === 'stopImmediatePropagation') {
      thisEvent.immediatePropagationStopped = true
    }
    // Read from the event itself rather than the proxy: Event's methods and accessors rely on internal slots
    // (private fields since Node 24), which throw when `this` is the proxy.
    const value = Reflect.get(thisEvent, prop)
    return typeof value === 'function' && prop !== 'constructor' ? value.bind(thisEvent) : value
  }
})
exports.default = createEventProxy
