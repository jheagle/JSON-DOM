'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.for-each.js')
require('core-js/stable')
var _createDomItem = _interopRequireDefault(require('../objects/createDomItem'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Ensure all basic properties of the DomItem are present.
 * @function
 * @memberOf module:domFunctions
 * @param {Object} item - The object that will be formatted as a DomItem.
 * @returns {DomItem}
 */
const addDomItemProperties = item => {
  if (typeof item.children !== 'undefined') {
    item.children.forEach(child => {
      addDomItemProperties(child)
    })
  }
  return (0, _createDomItem.default)(item)
}
var _default = exports.default = addDomItemProperties
