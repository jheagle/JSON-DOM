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
const documentItem_1 = __importDefault(require('../objects/documentItem'))
const si_funciona_1 = __importDefault(require('si-funciona'))
/**
 * A selector function for retrieving existing child domGeneral.DomItems from the given parent item.
 * This function will check all the children starting from item, and scan the attributes
 * property for matches. The return array contains children matching from all levels.
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domGeneral
 * @param {string} attr - Provide the attribute name to be searched
 * @param {*} value - The attribute value to be compared
 * @param {DomItem} item - The DomItem which may have parent items matching the
 * attribute criteria
 * @returns {Array}
 */
const getParentsFromAttribute = (attr, value, item = documentItem_1.default.body) => {
  if (item.parentItem === null) {
    if (item.nodeName === '#document') {
      throw new Error('Root parent item must be an empty object, null reference found.')
    }
    throw new Error('Detached child, missing parentItem reference. Use empty object if this is the root item.')
  }
  if (si_funciona_1.default.emptyObject(item.parentItem)) {
    return []
  }
  const parent = item.parentItem
  return (parent.attributes[attr] || item[attr] || false) === value ? getParentsFromAttribute(attr, value, parent).concat([parent]) : getParentsFromAttribute(attr, value, parent)
}
exports.default = getParentsFromAttribute
