'use strict'

require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.every.js')
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
const hasTrait_1 = __importDefault(require('./hasTrait'))
/**
 * Whether an item, and every item below it, has the render trait: the tree json-dom's render and sync functions work
 * on. hasTrait only checks the one item, so use this where a tree comes from somewhere else. It is also a type guard.
 * @function
 * @memberOf module:domGeneral
 * @param {CoreItem} item - The item at the top of the tree to check.
 * @returns {boolean}
 */
const isDomItem = item => (0, hasTrait_1.default)(item, 'render') && item.children.every(isDomItem)
exports.default = isDomItem
