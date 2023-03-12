'use strict'

require('core-js/modules/es.object.define-property.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/es.object.to-string.js')
require('core-js/modules/esnext.async-iterator.for-each.js')
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
require('core-js/modules/web.dom-collections.for-each.js')
require('core-js/modules/es.array.includes.js')
require('core-js/modules/es.string.includes.js')
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Remove all empty properties to reduce total size of the object.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem with properties to check for empty.
 * @param {Array} propertiesToDelete - Optional array of additional property names to remove.
 * @returns {DomItem}
 */
var removeEmptyProperties = function removeEmptyProperties (item, propertiesToDelete) {
  item.children.forEach(function (child) {
    removeEmptyProperties(child, propertiesToDelete)
  })
  _siFunciona.default.objectKeys(item).forEach(function (property) {
    if (!item[property] || propertiesToDelete.includes(property)) {
      delete item[property]
    }
  })
  return item
}
var _default = removeEmptyProperties
exports.default = _default
