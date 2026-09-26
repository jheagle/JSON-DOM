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
const documentDomItem_1 = __importDefault(require('./documentDomItem'))
let existingItem = null
/**
 * The shared root DomItem of the Virtual DOM (DomItem tree) for this environment's real document.
 */
const documentItem = (() => {
  if (existingItem === null) {
    existingItem = (0, documentDomItem_1.default)()
  }
  return existingItem
})()
exports.default = documentItem
