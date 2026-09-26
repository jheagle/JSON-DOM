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
const bindListeners_1 = __importDefault(require('./bindListeners'))
/**
 * Based on the eventListeners property of the provided item, bind the listeners to the associated element property
 * for each item in the domEvents.DomItem structure.
 * WARNING: This is a recursive function.
 * @param item - The DomItem with an associated HTMLElement to have a listener
 * assigned
 */
const bindAllListeners = item => {
  for (const child of item.children) {
    bindAllListeners(child)
  }
  return (0, bindListeners_1.default)(item)
}
exports.default = bindAllListeners
