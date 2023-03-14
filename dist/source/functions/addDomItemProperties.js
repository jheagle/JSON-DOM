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
require('core-js/stable')
var _createDomItem = _interopRequireDefault(require('../objects/createDomItem'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Ensure all basic properties of the DomItem are present.
 * @function
 * @memberOf module:domFunctions
 * @param {Object} item - The object that will be formatted as a DomItem.
 * @returns {DomItem}
 */
var addDomItemProperties = function addDomItemProperties (item) {
  if (typeof item.children !== 'undefined') {
    item.children.forEach(function (child) {
      addDomItemProperties(child)
    })
  }
  return (0, _createDomItem.default)(item)
}
var _default = addDomItemProperties
exports.default = _default
