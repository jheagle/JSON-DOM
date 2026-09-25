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
const createDomItem_1 = __importDefault(require('./createDomItem'))
/**
 * Ensure all basic properties of the DomItem are present.
 * @function
 * @memberOf module:domGeneral
 * @param {Object} item - The object that will be formatted as a DomItem.
 * @returns {DomItem}
 */
const addDomItemProperties = item => {
  if (typeof item.children !== 'undefined') {
    item.children.forEach(child => {
      addDomItemProperties(child)
    })
  }
  return (0, createDomItem_1.default)(item)
}
exports.default = addDomItemProperties
