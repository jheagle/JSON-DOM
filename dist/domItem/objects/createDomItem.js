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
const createCoreItem_1 = __importDefault(require('./createCoreItem'))
const withTrait_1 = __importDefault(require('../traits/withTrait'))
/**
 * DomItem is a CoreItem with the render trait: a plain object representation of one HTML element, mirrored onto a real
 * element via {@link updateElement}/{@link renderHtml}. On top of the CoreItem properties it has the element and the
 * listeners which are attached to it.
 * @typedef {CoreItem} DomItem
 * @memberOf module:domGeneral
 * @property {Object.<module:domEvents~EventName, Object.<number, eventHandler>>} activeListeners - Generated property storing assigned
 * listeners.
 * @property {(Object|HTMLElement|null)} element - A reference to an existing HTML element will be stored here (default
 * null)
 */
/**
 * This is the basic Object for representing a node in json-dom's Virtual DOM (DomItem tree): a generic item (see
 * {@link createCoreItem}) with the render trait. All incoming attributes will be merged to the specified format, and the
 * given object is completed and returned (it is not copied).
 * @function
 * @memberOf module:domGeneral
 * @param {Object} [item={}] - DomItem-like object to be formatted as DomItem
 * @returns {DomItem}
 */
const createDomItem = (item = {}) => (0, withTrait_1.default)((0, createCoreItem_1.default)(item), 'render', {
  element: item.element ?? null
})
exports.default = createDomItem
