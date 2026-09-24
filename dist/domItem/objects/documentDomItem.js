'use strict'

require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.map.js')
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
const initChildren_1 = __importDefault(require('./initChildren'))
const initRoot_1 = __importDefault(require('./initRoot'))
const updateDomItems_1 = __importDefault(require('../../sync/updateDomItems'))
/**
 * Return the root DomItem of a Virtual DOM (DomItem tree) for the document. The rootItem argument is a system
 * variable and not necessary to implement.
 * @function
 * @memberOf module:domGeneral
 * @param {Object.<string, listenerFunction>} listeners - An object of all event
 * listeners to be registered in the Dom
 * @param {DomItemRoot|DomItem} [rootItem] - This is a
 * reference to DomItemRoot which will be defaulted with {@link initRoot}
 * @returns {DomItemRoot|DomItem}
 */
const documentDomItem = (listeners = {}, rootItem = (0, initRoot_1.default)((0, initChildren_1.default)(), listeners)) => {
  rootItem.children = rootItem.children.map(child => (0, createDomItem_1.default)(child))
  rootItem.children.map(child => {
    child.parentItem = rootItem
    return child
  })
  rootItem.head = rootItem.children[0]
  rootItem.body = rootItem.children[1]
  return (0, updateDomItems_1.default)((0, createDomItem_1.default)(rootItem))
}
exports.default = documentDomItem
