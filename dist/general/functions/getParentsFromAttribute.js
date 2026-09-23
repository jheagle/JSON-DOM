'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _documentItem = _interopRequireDefault(require('../objects/documentItem.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
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
const getParentsFromAttribute = (attr, value, item = _documentItem.default.body) => {
  if (item.parentItem === null) {
    if (item.nodeName === '#document') {
      throw new Error('Root parent item must be an empty object, null reference found.')
    }
    throw new Error('Detached child, missing parentItem reference. Use empty object if this is the root item.')
  }
  return Object.keys(item.parentItem).length ? (item.parentItem.attributes[attr] || item[attr] || false) === value ? getParentsFromAttribute(attr, value, item.parentItem).concat([item.parentItem]) : getParentsFromAttribute(attr, value, item.parentItem) : []
}
const _default = exports.default = getParentsFromAttribute
