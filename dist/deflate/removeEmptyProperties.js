'use strict'

require('core-js/modules/es.array.includes.js')
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
const si_funciona_1 = __importDefault(require('si-funciona'))
/**
 * Check if the value is an empty object / array, or if it is null or undefined.
 * @param {*} propertyValue
 * @returns {boolean}
 */
const isEmpty = propertyValue => si_funciona_1.default.emptyObject(propertyValue) || propertyValue === null || typeof propertyValue === 'undefined'
/**
 * Remove all empty properties to reduce total size of the object.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} item - The DomItem with properties to check for empty.
 * @param {Array} propertiesToDelete - Optional array of additional property names to remove.
 * @returns {DomItem}
 */
const removeEmptyProperties = (item, propertiesToDelete = []) => {
  item.children.forEach(child => {
    removeEmptyProperties(child, propertiesToDelete)
  })
  const properties = item
  si_funciona_1.default.objectKeys(item).forEach(property => {
    const propertyValue = properties[property]
    if (isEmpty(propertyValue) || propertiesToDelete.includes(property)) {
      delete properties[property]
    }
  })
  return item
}
exports.default = removeEmptyProperties
