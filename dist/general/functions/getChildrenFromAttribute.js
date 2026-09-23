'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _documentItem = _interopRequireDefault(require('../objects/documentItem.js'))
const _gatherChildItems = _interopRequireDefault(require('./gatherChildItems.js'))
const _getChildTest = _interopRequireDefault(require('./getChildTest.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * A selector function for retrieving existing child domGeneral.DomItems from the given parent item.
 * This function will check all the children starting from item, and scan the attributes
 * property for matches. The returned array contains children matching from all levels.
 * WARNING: This calls a recursive function.
 * @function
 * @memberOf module:domGeneral
 * @param {string} attr - Provide the attribute name to be searched
 * @param {*} value - The attribute value to be compared
 * @param {DomItem} item - The DomItem which may have child items matching the attribute
 * criteria
 * @returns {Array.<DomItem>}
 */
const getChildrenFromAttribute = (attr, value, item = _documentItem.default.body) => (0, _gatherChildItems.default)(item, (0, _getChildTest.default)(attr, value))
const _default = exports.default = getChildrenFromAttribute
