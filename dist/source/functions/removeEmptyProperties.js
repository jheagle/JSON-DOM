'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.async-iterator.for-each.js')
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Check if the value is an empty object / array, or if it is null or undefined.
 * @param {*} propertyValue
 * @returns {boolean}
 */
const isEmpty = propertyValue => _siFunciona.default.emptyObject(propertyValue) || propertyValue === null || typeof propertyValue === 'undefined'

/**
 * Remove all empty properties to reduce total size of the object.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem with properties to check for empty.
 * @param {Array} propertiesToDelete - Optional array of additional property names to remove.
 * @returns {DomItem}
 */
const removeEmptyProperties = (item, propertiesToDelete) => {
  item.children.forEach(child => {
    removeEmptyProperties(child, propertiesToDelete)
  })
  _siFunciona.default.objectKeys(item).forEach(property => {
    const propertyValue = item[property]
    if (isEmpty(propertyValue) || propertiesToDelete.includes(property)) {
      delete item[property]
    }
  })
  return item
}
var _default = exports.default = removeEmptyProperties
